import React from 'react';
import UploadPhotoImg from '../../../../images/upload-photo.svg';

interface PhotoInputProps {
  onUpload: (url: string) => void;
}

const PhotoInput: React.FC<PhotoInputProps> = props => {
  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) =>
    props.onUpload(URL.createObjectURL(event.target.files && event.target.files[0]));

  return (
    <div className="upload-photo">
      <input type="file" className="img-input" accept="image/jpeg,image/png,image/gif" onChange={onUpload} />
      <img src={UploadPhotoImg} alt="upload" />
      <p className="upload-text">Upload a photo</p>
    </div>
  );
};

export default PhotoInput;
