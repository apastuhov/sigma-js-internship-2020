import React from 'react';
import './additionalInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import PhotoInput from './components/PhotoInput';
import { useField, useFormikContext } from 'formik';
import TextareaInput from './components/TextareaInput';

const AdditionalInfo: React.FC = props => {
  const { setFieldValue } = useFormikContext();

  const handleUpload = (url: string) => setFieldValue('fileUrl', url);

  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Additional Info</h1>
        <p>
          Photo<span className="text-optional"> (optional)</span>
        </p>
        <div className="upload-wrapper">
          <PhotoInput onUpload={handleUpload} />
        </div>
        <p>
          About<span className="text-optional"> (optional)</span>
        </p>
        <TextareaInput name="about" />
      </Box>
    </Tile>
  );
};

export default AdditionalInfo;
