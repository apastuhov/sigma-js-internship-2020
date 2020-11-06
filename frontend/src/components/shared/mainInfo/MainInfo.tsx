import React from 'react';
import './mainInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import InputWithFormik from '../InputWithFormik/InputWithFormik';
import { sex } from '../../constants/constants';
import SelectWithFormik from '../SelectWithFormik/SelectWithFormik';
import { Country } from '../../constants/Countries';
import dayjs from 'dayjs';

const MainInfo: React.FC = () => {
  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Main Info</h1>
        <InputWithFormik label="Name" name="name" type="text" />
        <InputWithFormik label="Surname" name="surname" type="text" />
        <div className="sex-wrapper">
          <SelectWithFormik label="Sex" name="sex" options={Object.keys(sex)} />
        </div>
        <InputWithFormik label="Birthday" name="birthday" type="date" currentDate={dayjs().format().substring(0, 10)} />
        <div className="country-selector">
          <SelectWithFormik label="Country" name="country" options={Object.keys(Country)} />
        </div>
      </Box>
    </Tile>
  );
};

export default MainInfo;
