import { firestore, timestamp } from '../firebase/config';
import { FireStoreCollection } from '../hooks/useFirestore';
import { addDoc, collection as firestoreCollection } from 'firebase/firestore'

export const uploadToDatabase = async (collection: FireStoreCollection, data: Record<string, any>) => {
    const collectionRef = firestoreCollection(firestore, collection)
    const createdAt = timestamp()
    await addDoc(collectionRef, { ...data, createdAt })
}