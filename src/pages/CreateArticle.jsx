import React, { useState } from 'react';
import Title from '../components/Title';
import UploadForm from '../components/UploadForm';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/Modal';

const CreateArticle = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <Title>Créer un nouvel article</Title>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default CreateArticle;