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
        // setFile(files.map(file => URL.createObjectURL(file)));
        setFile(files)
        setError('');
      } else {
        setFile(null);
        setError('Veuillez sélectionner un fichier image (png or jpg)');
      }
    }
  };

  return (
    <form className="mb-10 text-center">
      <label className="block w-10 h-10 m-auto text-xl bg-red-200 hover:bg-white rounded-full font-bold text-white hover:text-red-200 border-2 border-red-200">
        <input className="w-0 h-0" type="file" accept="image/png, image/jpeg" multiple={multiple} onChange={handleChange} />
          <FontAwesomeIcon className="w-full h-full text-xl" icon={faPlus} />
      </label>
      <div className="output">
        { error && <div className="text-red-500">{ error }</div>}
      </div>
    </form>
  );
}

export default UploadImageForm;