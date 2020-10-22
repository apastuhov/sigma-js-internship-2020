import React, { useState } from 'react';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import { Box } from '@material-ui/core';
import { CountryDropdown } from 'react-country-region-selector';
import { lowLimit, hightLimit, languages, languageLevels } from '../../constants/constants';
import { dataType } from '../../interfaces/Interface';
import apiService from '../../../services/apiService';
import './search.scss';

const Search: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [checkboxFilters, setCheckboxFilters] = useState({
    male: false,
    female: false,
    isOnline: false
  });

  const [selectsFilters, setSelectsFilters] = useState({
    lowAge: lowLimit,
    highAge: hightLimit,
    language: '',
    level: ''
  });

  const selectCountry = (val: string) => {
    setCountry(val);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxFilters({ ...checkboxFilters, [e.target.name]: e.target.checked });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectsFilters({ ...selectsFilters, [e.target.name]: e.target.value });
  };

  const getGender = () => {
    if ((!checkboxFilters.female && !checkboxFilters.male) || (checkboxFilters.female && checkboxFilters.male)) {
      return;
    }
    return Boolean(checkboxFilters.male) ? 0 : 1;
  };

  const getOptions = (arr: (string | number)[]) => {
    return arr.map((item, i) => (
      <option key={`${item}${i}`} value={item}>
        {item}
      </option>
    ));
  };

  const findUsers = (e: React.FormEvent) => {
    const requestBody = {
      name: name,
      lowAge: selectsFilters.lowAge,
      highAge: selectsFilters.highAge,
      sex: getGender(),
      country: country,
      language: selectsFilters.language,
      level: selectsFilters.level,
      isOnline: checkboxFilters.isOnline
    };
    e.preventDefault();
    apiService(dataType.users, requestBody).then(users => setUsers(users));
  };

  const years = [...Array(hightLimit - lowLimit)].map((_, index) => index + lowLimit);

  return (
    <Layout pageTitle="Search">
      <Box boxShadow={2} className="filter">
        <form onSubmit={findUsers}>
          <label>Name</label>
          <input type="text" onChange={handleName} value={name} />
          <label>Age</label>
          <div className="years">
            <select onChange={handleSelect} value={selectsFilters.lowAge} name="lowAge">
              {getOptions(years)}
            </select>
            <div className="divider"></div>
            <select onChange={handleSelect} value={selectsFilters.highAge} name="highAge">
              {getOptions(years)}
            </select>
          </div>
          <label>Sex</label>
          <div>
            <label>
              <input type="checkbox" checked={checkboxFilters.male} onChange={handleCheckbox} name="male" />
              Male
            </label>
            <label>
              <input type="checkbox" checked={checkboxFilters.female} onChange={handleCheckbox} name="female" />
              Female
            </label>
          </div>
          <label>Country</label>
          <CountryDropdown value={country} onChange={val => selectCountry(val)} />
          <label>Language</label>
          <select onChange={handleSelect} value={selectsFilters.language} name="language">
            {getOptions(languages)}
          </select>
          <label>Level</label>
          <select onChange={handleSelect} value={selectsFilters.level} name="level">
            {getOptions(languageLevels)}
          </select>
          <label>Online</label>
          <input type="checkbox" checked={checkboxFilters.isOnline} onChange={handleCheckbox} name="isOnline" />
          <button type="submit">Search</button>
        </form>
      </Box>
      <UserList users={users} />
    </Layout>
  );
};

export default Search;
