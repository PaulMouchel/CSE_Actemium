import deleteFolderContents from './deleteFolderContents';
import { firestore } from '../firebase/config';
import { deleteDoc, doc } from 'firebase/firestore'
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
    deleteDoc(doc(firestore, collection, id))
        .then(next && next(nextParams));
}

export default deleteDocument;