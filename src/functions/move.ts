import { doc, updateDoc, collection as firestoreCollection, where, query, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';

export const move = async (movement: 1 | -1, collection: FireStoreCollection, order: number, id: string) => {

    const collectionRef = firestoreCollection(firestore, collection)
    
    const q = query(collectionRef, where('order', '==', order + movement))
    const otherUser = await getDocs(q)

    otherUser.forEach((otherUser) => {
        const docRef = doc(firestore, collection, otherUser.id)
        updateDoc(docRef, { order })
    });

    const docRef = doc(firestore, collection, id)
    updateDoc(docRef, { order: order + movement })
}