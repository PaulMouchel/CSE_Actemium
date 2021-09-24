import { projectFirestore } from '../firebase/config';
import { sortByOrder } from './sortByOrder';

export const updateOrders = async (data, collection, exeptionId) => {
    const collectionRef = projectFirestore.collection(collection);
    sortByOrder(data.filter(item => item.id !== exeptionId)).forEach((doc, index) => {
        collectionRef.doc(doc.id).update({ order: index });
    });
}