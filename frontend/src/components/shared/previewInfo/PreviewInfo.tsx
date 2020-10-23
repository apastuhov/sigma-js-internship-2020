import React from 'react';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import { UserCard } from '../userCard/UserCard';
import User from '../../mocks/user-mock.json';
import './previewInfo.scss';

const PreviewInfo: React.FC = () => {
  return (
    <Tile>
      <Box boxShadow={2} className="preview-tile">
        <h1 className="preview-h1">Preview</h1>
        <UserCard mainInfo={User} boxShadow={0} />
      </Box>
    </Tile>
  );
};

export default PreviewInfo;
