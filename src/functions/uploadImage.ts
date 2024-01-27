import { Dispatch, SetStateAction } from "react";
import { storage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FileType } from "../types/File.type";

export const uploadImage = (
    image: FileType, 
    setImage: Dispatch<SetStateAction<FileType | undefined>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    next: () => void
) => {
    image.storageRef = ref(storage, `${collection}/${storageId}/${image.fileName}`)
    const uploadTask = uploadBytesResumable(image.storageRef, image.file);
    uploadTask.on(
        "state_changed",
        null,
        function error(err: any) {
            console.log("Erreur de chargement de l'image:" + err)
            setError("Erreur de chargement de l'image:" + err)
        },
        async function complete() {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            image.downloadURL = downloadURL
            setImage({...image})
            next()
        }
    );
}