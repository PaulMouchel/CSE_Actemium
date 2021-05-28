import React, { useEffect } from 'react';
import useNewsStorage from '../hooks/useNewsStorage';
import { useHistory } from 'react-router-dom'

const NewsProgressBar = ({ title, subTitle, text, gallery, setLoading }) => {
  const { progress, url } = useNewsStorage(title, subTitle, text, gallery, setLoading);
  const history = useHistory()


  














  useEffect(() => {
    if (url) {
      history.push('/')
    }
  }, [url]);

  return (
    <div className="h-3 bg-red-500 mt-8"
    ></div>
  );
} 

export default NewsProgressBar;