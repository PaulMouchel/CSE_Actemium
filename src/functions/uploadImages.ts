
import { Dispatch, SetStateAction } from "react";
import { storage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";
import { StorageError, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FileType } from "../types/File.type";

export const uploadImages = (
    gallery: FileType[], 
    setGallery: Dispatch<SetStateAction<FileType[]>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    callback: () => void
) => {
    if (gallery.every(image => (image.status === "FINISH"))) {
        callback()
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
                (error: StorageError) => {
                    console.log("Erreur de chargement de l'image:", error);
                    setError("Erreur de chargement de l'image: " + error.message);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
                    image.downloadURL = downloadURL
                    image.status = "FINISH"
                    setGallery([...gallery])
                }
            );
        })
    };
}