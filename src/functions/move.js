import { projectFirestore } from '../firebase/config';

export const move = async (movement, collection, order, id) => {
    const collectionRef = projectFirestore.collection(collection);
    const otherUser = await collectionRef.where('order', '==', order + movement).get()
    otherUser.forEach((doc) => {
        collectionRef.doc(doc.id).update({ order: order });
    });
    collectionRef.doc(id).update({ order: order + movement });
}