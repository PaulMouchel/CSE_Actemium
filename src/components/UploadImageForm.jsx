import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa"
import Compress from 'compress.js';

const UploadImageForm = ({file, setFile, multiple, maxWidth, maxHeight}) => {

  const [error, setError] = useState(null);
  const types = ['image/png', 'image/jpeg'];

  const blobToFile = (blob, fileName) => {
    blob.lastModifiedDate = new Date();
    blob.name = fileName;
    return blob;
  }

  const handleChange = (e) => {
    // files est le tableau contenant les fichiers
    let files = Array.from(e.target.files)
    let selected = files[0]

    // Si au moins un fichier a été sélectionné
    if (selected) {
      // files est le tableau contenant les fichier image
      files = files.filter(file => types.includes(file.type))
      selected = files[0]

      // Si au moins un fichier image a été sélectionné
      if (selected) {
        const compress = new Compress()
        compress.compress(files, {
          size: 2, // the max size in MB, defaults to 2MB
          quality: .75, // the quality of the image, max is 1,
          maxWidth: maxWidth ? maxWidth : 1920, // the max width of the output image, defaults to 1920px
          maxHeight: maxHeight ? maxHeight : 1920, // the max height of the output image, defaults to 1920px
          resize: true, // defaults to true, set false if you do not want to resize the image width and height
          rotate: false, // See the rotation section below
        }).then((data) => {
          // returns an array of compressed images
          let filesArray = data.map((file) => {
            const blob = Compress.convertBase64ToFile(file.data, file.ext)
            return blobToFile(blob, file.alt)
          })
          const newFiles = Array.from(filesArray).map((file) => {
            return {
               file: file,
               fileName: file.name,
               status: "CREATED",
               storageRef: "",//projectStorage.ref().child(file.name),
               url: URL.createObjectURL(file),
               downloadURL: "",
               description: "",
            };
         });
          setFile(newFiles)
          setError('');
        })
      } else {
        setFile(null);
        setError('Veuillez sélectionner un fichier image (png or jpg)');
      }
    }
  };

  return (
    <div className="mb-10 text-center">
      <label className="transform duration-300 ease-in-out block w-10 h-10 m-auto bg-gray-700 hover:bg-white rounded-full text-white hover:text-gray-700">
        <input className="w-0 h-0" type="file" accept="image/png, image/jpeg" multiple={multiple} onChange={handleChange} />
        <FaPlus className="w-full h-full" />
      </label>
      <div className="output">
        { error && <div className="text-red-500 bg-white p-2">{ error }</div>}
      </div>
    </div>
  );
}

export default UploadImageForm;