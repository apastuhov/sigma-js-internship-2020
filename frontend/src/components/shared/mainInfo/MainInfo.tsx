import React from 'react';
import './mainInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import Input from '../input/Input';

const MainInfo: React.FC = () => {
  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Main Info</h1>
        <Input name="Name" />
        <Input name="Surname" />
        <div className="sex-wrapper">
          <input type="radio" />
          <label className="label">Male</label>
          <input type="radio" />
          <label className="label">Female</label>
        </div>
      </Box>
    </Tile>
  );
};

export default MainInfo;
