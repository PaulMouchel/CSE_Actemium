import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useNewsStorage = (mainImage, title, subTitle, text, gallery) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(mainImage.name);
    const collectionRef = projectFirestore.collection('News');
    
    storageRef.put(mainImage).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const image = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ image, title, subTitle, createdAt });
      setUrl(image);
    });
  }, [mainImage]);

  return { progress, url, error };
}

export default useNewsStorage;