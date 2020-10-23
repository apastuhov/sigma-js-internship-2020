import React, { useContext, useState } from 'react';
import './mainInfo.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import Input from '../input/Input';
import { CountryDropdown } from 'react-country-region-selector';
import { UserContext } from '../../Context/PreviewContext';
import InputWithFormik from '../InputWithFormik/InputWithFormik';

const MainInfo: React.FC = () => {
  const [country, setCountry] = useState('');
  // const { mainInfo, setInfo } = useContext(UserContext);

  const selectCountry = (val: string) => {
    setCountry(val);
  };

  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Main Info</h1>
        <InputWithFormik label="Name" name="name" type="text" />
        <InputWithFormik label="Surname" name="surname" type="text" />
        <div className="sex-wrapper">
          <input type="radio" name="gender" />
          <label className="label">Male</label>
          <input type="radio" name="gender" />
          <label className="label">Female</label>
        </div>
        <InputWithFormik label="Birthday" name="birthday" type="date" max={(new Date).toISOString().substring(0, 10)}/>
        <div className="country-selector">
          <label>Country</label>
          <CountryDropdown value={country} onChange={val => selectCountry(val)} />
        </div>
      </Box>
    </Tile>
  );
};

export default MainInfo;
