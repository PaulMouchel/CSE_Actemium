import { projectFirestore } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';

export const move = async (movement: 1 | -1, collection: FireStoreCollection, order: number, id: string) => {
    const collectionRef = projectFirestore.collection(collection);
    const otherUser = await collectionRef.where('order', '==', order + movement).get()
    otherUser.forEach((doc) => {
        collectionRef.doc(doc.id).update({ order: order });
    });
    collectionRef.doc(id).update({ order: order + movement });
}