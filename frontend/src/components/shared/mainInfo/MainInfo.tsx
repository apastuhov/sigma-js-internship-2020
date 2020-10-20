import React from 'react';
import './mainInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import Input from '../input/Input';
import Select from '../select/Select';

const MainInfo: React.FC = () => {
  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Main Info</h1>
        <Input name="Name" type="text" />
        <Input name="Surname" type="text" />
        <div className="sex-wrapper">
          <input type="radio" name="gender" />
          <label className="label">Male</label>
          <input type="radio" name="gender" />
          <label className="label">Female</label>
        </div>
        <Input name="Birthday" type="date" />
        <Select name="Country" />
      </Box>
    </Tile>
  );
};

export default MainInfo;
