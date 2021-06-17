import React, { useState } from 'react';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UploadImageForm = ({file, setFile, multiple}) => {

  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

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
        const newFiles = Array.from(files).map((file) => {
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
        <FontAwesomeIcon className="w-full h-full" icon={faPlus} />
      </label>
      <div className="output">
        { error && <div className="text-red-500">{ error }</div>}
      </div>
    </div>
  );
}

export default UploadImageForm;