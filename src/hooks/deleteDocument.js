import deleteFolderContents from './deleteFolderContents';
import { projectFirestore } from '../firebase/config';

const deleteDocument = ({docs, id, collection}) => {
    
    const currentDoc = docs.find(doc => doc.id === id)
    deleteFolderContents(collection + "/" + currentDoc.storageId)
    const collectionRef = projectFirestore.collection(collection);      
    collectionRef.doc(id).delete();
  }

export default deleteDocument;