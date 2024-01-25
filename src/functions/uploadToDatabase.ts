import { projectFirestore, timestamp } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';

export const uploadToDatabase = async (collection: FireStoreCollection, data: Record<string, any>) => {
    const collectionRef = projectFirestore.collection(collection);
    const createdAt = timestamp();
    await collectionRef.add({ ...data, createdAt });
}