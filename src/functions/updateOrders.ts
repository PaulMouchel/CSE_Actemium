import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';
import { sortByOrder } from './sortByOrder';

export const updateOrders = async <T extends { id: string, order: number }>(
    data: T[], 
    collection: FireStoreCollection, 
    exeptionId: string
) => {
    sortByOrder(data.filter(item => item.id !== exeptionId)).forEach((document, index) => {
        const docRef = doc(firestore, collection, document.id)
        updateDoc(docRef, { order: index })
    })
}