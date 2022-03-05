import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
//import { useAuth } from '../contexts/AuthContext';

const useFirestore = (collection, currentUser) => {
  const [docs, setDocs] = useState([]);
  // const auth = useAuth()

  useEffect(() => {
    // if (auth) {
    //   if (auth.currentUser) {
        const unsub = projectFirestore.collection(collection)
          .orderBy('createdAt', 'desc')
          .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
              documents.push({...doc.data(), id: doc.id});
            });
            setDocs(documents);
          });

        return () => unsub();
        // this is a cleanup function that react will run when
        // a component using the hook unmounts
    //   }
    // }
    setDocs([])
    
  }, [collection, currentUser/*, auth*/]);

  return { docs };
}

export default useFirestore;