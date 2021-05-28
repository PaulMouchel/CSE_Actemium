import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { useHistory } from 'react-router-dom'

const useNewsStorage = (title, subTitle, text, gallery, setLoading) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [galleryUrl, setGalleryUrl] = useState([]);
  const [uploaded, setUploaded] = useState(0);
  const history = useHistory()

  const storeInDatabase = async () => {
      console.log("passé par storeInDatabase")
      const collectionRef = projectFirestore.collection('News');
      const createdAt = timestamp();
      
      const currentTime = new Date()
      // returns the month (from 0 to 11)
      const month = ('0' + currentTime.getMonth()).slice(-2)
      // returns the day of the month (from 1 to 31)
      const day = ('0' + currentTime.getDate()).slice(-2)
      // returns the year (four digits)
      const year = currentTime.getFullYear()
      const date = day + "." + month + "." + year
      const gallery = galleryUrl

      console.log("Mise en bdd")
      await collectionRef.add({ gallery, title, subTitle, text, date, createdAt });
      // setUrl(image);
      setLoading(false)
      history.push('/')
  }

  useEffect(() => {
    console.log("passé par useEffect")
    // references
    // const storageRef = projectStorage.ref(mainImage.name);
    const galleryStorageRef = gallery.map(image => projectStorage.ref(image.name))
    console.log("galleryStorageRef : " + galleryStorageRef)
    
    let galleryUrlTemp = []
    console.log("galleryUrlTemp : " + galleryUrlTemp)
    
    if (gallery.length > 0) {
      galleryStorageRef.forEach(element => {
        galleryUrlTemp.push("")
      });
      setGalleryUrl(galleryUrlTemp)
      console.log("galleryUrl : " + galleryUrl)
      galleryStorageRef.forEach((element, index) => {

        element.put(gallery[index]).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
          
        }, (err) => {
          setError(err);
        }, async () => {
          const image = await element.getDownloadURL();
          let prepareGalleryUrl = galleryUrl
          prepareGalleryUrl[index] = image
          setGalleryUrl(prepareGalleryUrl)
          setUploaded(uploaded+1)
          console.log("uploaded : " + uploaded)
          if (uploaded === gallery.length) {
            console.log("conparaison : uploaded : " + uploaded + " gallery.length : " + gallery.length)
            storeInDatabase()
          }
          
        });
      });



    }


    // storageRef.put(mainImage).on('state_changed', (snap) => {
    //   let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
    //   setProgress(percentage);
    // }, (err) => {
    //   setError(err);
    // }, async () => {
    //   const image = await storageRef.getDownloadURL();
    //   const createdAt = timestamp();
      
    //   const currentTime = new Date()
    //   // returns the month (from 0 to 11)
    //   const month = ('0' + currentTime.getMonth()).slice(-2)
    //   // returns the day of the month (from 1 to 31)
    //   const day = ('0' + currentTime.getDate()).slice(-2)
    //   // returns the year (four digits)
    //   const year = currentTime.getFullYear()
    //   const date = day + "." + month + "." + year


    //   await collectionRef.add({ image, title, subTitle, text, date, createdAt });
    //   setUrl(image);
    // });
  }, [gallery, title, subTitle, text]);

  return { progress, url, error };
}

export default useNewsStorage;