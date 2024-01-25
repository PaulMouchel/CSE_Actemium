import { Dispatch, SetStateAction } from "react";
import { projectStorage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";

export const uploadImage = (
    image: any, 
    setImage: Dispatch<SetStateAction<any>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    next: () => void
) => {
    let newImage = image
    newImage["storageRef"] = projectStorage.ref().child(collection + "/" + storageId + "/" + image.fileName)
    setImage(newImage)
    const uploadTask = image.storageRef.put(image.file);
    uploadTask.on(
        "state_changed",
        null,
        function error(err: any) {
            console.log("Erreur de chargement de l'image:" + err)
            setError("Erreur de chargement de l'image:" + err)
        },
        async function complete() {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            let newImage = image
            newImage["downloadURL"] = downloadURL
            setImage(newImage)
            next()
        }
    );
}