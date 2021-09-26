import { changeStateObjectField } from "./changeStateObjectField";
import { projectStorage } from "../firebase/config";

export const uploadImage = (image, setImage, collection, storageId, setError, next) => {
    changeStateObjectField(image, setImage, "storageRef", projectStorage.ref().child(collection + "/" + storageId + "/" + image.fileName));
    const uploadTask = image.storageRef.put(image.file);
    uploadTask.on(
        "state_changed",
        null,
        function error(err) {
            console.log("Erreur de chargement de l'image:" + err)
            setError("Erreur de chargement de l'image:" + err)
        },
        async function complete() {
            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
            changeStateObjectField(image, setImage, "downloadURL", downloadURL);
            next()
        }
    );
}