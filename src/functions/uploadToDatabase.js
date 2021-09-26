import { projectFirestore, timestamp } from '../firebase/config';

export const uploadToDatabase = async (collection, data) => {
    const collectionRef = projectFirestore.collection(collection);
    const createdAt = timestamp();
    await collectionRef.add({ ...data, createdAt });
}