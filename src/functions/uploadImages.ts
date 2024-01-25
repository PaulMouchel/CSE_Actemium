
import { Dispatch, SetStateAction } from "react";
import { projectStorage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";

export const uploadImages = (
    gallery: any[], 
    setGallery: Dispatch<SetStateAction<any[]>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    next: () => void
) => {
    if (gallery.every(image => (image.status === "FINISH"))) {
        next()
        return
    } else {
        gallery.forEach((image, index) => {
            if (image.storageRef === "") {
                let newGallery = [...gallery]
                newGallery[index]["storageRef"] = projectStorage.ref().child(collection + "/" + storageId + "/" + image.fileName)
                setGallery(newGallery)
            }
            if (image.status === "FINISH" || image.status === "UPLOADING") return;
            let newGallery = [...gallery]
            newGallery[index]["status"] = "UPLOADING"
            setGallery(newGallery)
            const uploadTask = image.storageRef.put(image.file);
            uploadTask.on(
                "state_changed",
                null,
                function error(err: any) {
                    console.log("Erreur de chargement de l'image:", err);
                    setError("Erreur de chargement de l'image:");
                },
                async function complete() {
                    const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                    let newGallery = [...gallery]
                    newGallery[index]["downloadURL"] = downloadURL
                    newGallery[index]["status"] = "FINISH"
                    setGallery(newGallery)
                }
            );
        })
    };
}