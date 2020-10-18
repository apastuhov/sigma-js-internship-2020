import React from 'react';
import './additionalInfo.scss';
import Tile from '../../shared/tile/Tile';
import UploadPhoto from '../../../images/upload-photo.svg';
import Box from '@material-ui/core/Box';

const AdditionalInfo: React.FC = () => {
  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Additional Info</h1>
        <p>
          Photo<span className="text-optional"> (optional)</span>
        </p>
        <div className="upload-wrapper">
          <div className="upload-photo">
            <input type="file" className="img-input" accept="image/jpeg,image/png,image/gif" />
            <img src={UploadPhoto} alt="upload" />
            <p className="upload-text">Upload a photo</p>
          </div>
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
