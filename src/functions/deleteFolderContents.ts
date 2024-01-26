import { storage } from '../firebase/config';
import { ref, deleteObject, listAll } from 'firebase/storage'

const deleteFolderContents = (path: string) => {
    const storageRef = ref(storage, path)

    listAll(storageRef)
        .then(dir => {
            dir.items.forEach(fileRef => {
                deleteObject(fileRef)
            })
            dir.prefixes.forEach(folderRef => {
                deleteFolderContents(folderRef.fullPath)
            })
        })
        .catch(error => {
          console.log(error);
        })
}

export default deleteFolderContents;