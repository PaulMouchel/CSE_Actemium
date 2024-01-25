import { projectFirestore } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';
import { sortByOrder } from './sortByOrder';

export const updateOrders = async <T extends { id: string, order: number }>(
    data: T[], 
    collection: FireStoreCollection, 
    exeptionId: string
) => {
    const collectionRef = projectFirestore.collection(collection)
    sortByOrder(data.filter(item => item.id !== exeptionId)).forEach((doc, index) => {
        collectionRef.doc(doc.id).update({ order: index })
    })
}