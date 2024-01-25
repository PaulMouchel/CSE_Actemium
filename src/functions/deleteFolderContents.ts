import { projectStorage } from '../firebase/config';

const deleteFolderContents = (path: string) => {
    const ref = projectStorage.ref(path);
    ref.listAll()
        .then(dir => {
            dir.items.forEach(fileRef => {
                deleteFile(ref.fullPath, fileRef.name);
            });
            dir.prefixes.forEach(folderRef => {
                deleteFolderContents(folderRef.fullPath);
            })
        })
        .catch(error => {
          console.log(error);
        });
}

const deleteFile = (pathToFile: string, fileName: string) => {
    const ref = projectStorage.ref(pathToFile);
    const childRef = ref.child(fileName);
    childRef.delete()
}

export default deleteFolderContents;