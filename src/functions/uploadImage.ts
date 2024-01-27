import { Dispatch, SetStateAction } from "react";
import { storage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";
import { StorageError, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FileType } from "../types/File.type";

export const uploadImage = (
    image: FileType, 
    setImage: Dispatch<SetStateAction<FileType | undefined>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    callback: () => void
) => {
    image.storageRef = ref(storage, `${collection}/${storageId}/${image.fileName}`)
    const uploadTask = uploadBytesResumable(image.storageRef, image.file);
    uploadTask.on(
        "state_changed",
        null,
        (error: StorageError) => {
            console.error("Erreur de chargement de l'image:" + error)
            setError("Erreur de chargement de l'image:" + error.message)
        },
        async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            image.downloadURL = downloadURL
            setImage({...image})
            callback()
        }
    );
}