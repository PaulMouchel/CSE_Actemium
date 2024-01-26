
import { Dispatch, SetStateAction } from "react";
import { storage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FileType } from "../types/File.type";

export const uploadImages = (
    gallery: FileType[], 
    setGallery: Dispatch<SetStateAction<FileType[]>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    next: () => void
) => {
    if (gallery.every(image => (image.status === "FINISH"))) {
        next()
        return
    } else {
        gallery.forEach((image) => {

            image.storageRef = image.storageRef ?? ref(storage, `${collection}/${storageId}/${image.fileName}`)

            if (image.status === "FINISH" || image.status === "UPLOADING") return;

            image.status = "UPLOADING"

            const uploadTask = uploadBytesResumable(image.storageRef, image.file);
            uploadTask.on(
                "state_changed",
                null,
                function error(err: any) {
                    console.log("Erreur de chargement de l'image:", err);
                    setError("Erreur de chargement de l'image:");
                },
                async function complete() {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                    image.downloadURL = downloadURL
                    image.status = "FINISH"
                    setGallery([...gallery])
                }
            );
        })
    };
}