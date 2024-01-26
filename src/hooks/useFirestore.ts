import { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';
import { collection as firestoreCollection, onSnapshot, orderBy, query } from 'firebase/firestore';

export type FirebaseDocument = Record<string, any> & {
  id: string
}

export type FireStoreCollection = "Admins" | "Background" | "Benefits" | "Cssct" | "News" | "Quotation" | "Team"

const useFirestore = <T extends Record<string, any>>(collection: FireStoreCollection) => {
    const [docs, setDocs] = useState<(T & { id: string })[]>([]);
    const auth = useAuth()

    useEffect(() => {
        if (auth?.currentUser) {

            const collectionToTrack = firestoreCollection(firestore, collection)
            const q = query(collectionToTrack, orderBy('createdAt',  'desc'))
            const unsub = onSnapshot(q, snap => {
                let documents: (T & { id: string })[] = [];
                snap.forEach(doc => {
                    documents.push({...doc.data() as T, id: doc.id});
                });
                setDocs(documents);
            })

            return () => unsub();
            // this is a cleanup function that react will run when
            // a component using the hook unmounts
        }
        // setDocs([])
      
    }, [collection, auth]);

    return { docs };
}

export default useFirestore;