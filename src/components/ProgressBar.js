import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, loaded }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      loaded(url)
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div className="h-3 bg-red-500 mt-8"
    ></div>
  );
} 

export default ProgressBar;