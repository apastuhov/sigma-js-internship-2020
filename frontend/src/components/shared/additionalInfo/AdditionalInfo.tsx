import React from 'react';
import './additionalInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import PhotoInput from './components/PhotoInput';
import { useFormikContext } from 'formik';

const AdditionalInfo: React.FC = () => {
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
        <textarea rows={9} cols={51} className="textarea" placeholder="Write something about you..."></textarea>
      </Box>
    </Tile>
  );
};

export default AdditionalInfo;
