import { Dispatch, SetStateAction } from "react";
import { storage } from "../firebase/config";
import { FireStoreCollection } from "../hooks/useFirestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const uploadImage = (
    image: any, 
    setImage: Dispatch<SetStateAction<any>>, 
    collection: FireStoreCollection, 
    storageId: string, 
    setError: Dispatch<SetStateAction<string>>, 
    next: () => void
) => {
    let newImage = image
    newImage["storageRef"] = ref(storage, `${collection}/${storageId}/${image.fileName}`)
    setImage(newImage)
    const uploadTask = uploadBytesResumable(image.storageRef, image.file);
    uploadTask.on(
        "state_changed",
        null,
        function error(err: any) {
            console.log("Erreur de chargement de l'image:" + err)
            setError("Erreur de chargement de l'image:" + err)
        },
        async function complete() {
            // const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref)
            let newImage = image
            newImage["downloadURL"] = downloadURL
            setImage(newImage)
            next()
        }
    );
}