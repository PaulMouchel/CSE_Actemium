import React, { useEffect } from 'react';
import useNewsStorage from '../hooks/useNewsStorage';
import { useHistory } from 'react-router-dom'

const NewsProgressBar = ({ mainImage, title, subTitle, text, gallery }) => {
  const { progress, url } = useNewsStorage(mainImage, title, subTitle, text, gallery);
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