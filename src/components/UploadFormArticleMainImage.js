import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadFormArticleMainImage = ({setmainImage}) => {
  const [file, setFile] = useState(null);
  const [fileTest, setFileTest] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setFileTest(selected)
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };


  return (
    <form className="mb-10 text-center">
      <label className="block w-10 h-10 m-auto text-xl bg-red-200 hover:bg-white rounded-full font-bold text-white hover:text-red-200 border-2 border-red-200">
        <input className="w-0 h-0" type="file" onChange={handleChange} />
          <FontAwesomeIcon className="w-full h-full text-xl" icon={faPlus} />
          {fileTest && <img src={URL.createObjectURL(fileTest)}></img>}
      </label>
      <div className="output">
        { error && <div className="text-red-500">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} loaded={setmainImage} /> }
      </div>
    </form>
  );
}

export default UploadFormArticleMainImage;