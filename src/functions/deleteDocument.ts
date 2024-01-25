import deleteFolderContents from './deleteFolderContents';
import { projectFirestore } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';

type Props = {
    docs: any[]
    id: string
    collection: FireStoreCollection
    next?: Function
    nextParams?: any
}

const deleteDocument = ({ docs, id, collection, next, nextParams }: Props) => {
    const currentDoc = docs.find(doc => doc.id === id)
    deleteFolderContents(collection + "/" + currentDoc.storageId)
    const collectionRef = projectFirestore.collection(collection);      
    collectionRef.doc(id).delete().then(next && next(nextParams));
}

export default deleteDocument;