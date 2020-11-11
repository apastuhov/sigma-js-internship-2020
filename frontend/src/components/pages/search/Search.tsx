import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import apiService from '../../../services/apiService';
import { hightLimit, languageLevels, languages, lowLimit } from '../../constants/constants';
import { dataType } from '../../interfaces/Interface';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import dayjs from 'dayjs';
import './search.scss';

const Search: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [genders, setGenders] = useState({
    male: false,
    female: false,
    other: false
  });

  const [online, setIsOnline] = useState({
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

  const handleOnline = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOnline({ ...online, [e.target.name]: e.target.checked });
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenders({ ...genders, [e.target.name]: e.target.checked });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectsFilters({ ...selectsFilters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    async function getUsers() {
      const users = await apiService(dataType.user);
      setUsers(users);
    }
    getUsers();
  }, []);

  const getGenders = () =>
    Object.entries(genders)
      .filter(([, b]) => b)
      .map(([a]) => a);

  const getOptions = (arr: (string | number)[] = [], obj: object = {}) => {
    if (!Object.keys(obj).length) {
      return arr.map((item, i) => (
        <option key={`${item}${i}`} value={item}>
          {item}
        </option>
      ));
    } else {
      return Object.keys(obj).map((item, i) => (
        <option key={`${item}${i}`} value={item}>
          {item}
        </option>
      ));
    }
  };

  const convertAgeToBirthdate = (age: number): string => {
    return dayjs().subtract(age, 'year').toISOString();
  };

  const findUsers = (e: React.FormEvent) => {
    const requestBody = {
      name: name,
      birthdateFrom: convertAgeToBirthdate(selectsFilters.highAge),
      birthdateTo: convertAgeToBirthdate(selectsFilters.lowAge),
      sex: getGenders(),
      country: country,
      language: selectsFilters.language,
      level: selectsFilters.level,
      isOnline: online.isOnline
    };
    e.preventDefault();
    apiService(dataType.filter, requestBody).then(users => {
      setUsers(users);
      setShowError(!Boolean(users.length));
    });
  };

  const lowYears = [...Array(hightLimit - lowLimit)].map((_, index) => index + lowLimit);
  const hightYears = [...lowYears].reverse();

  return (
    <Layout pageTitle="Search">
      <Box boxShadow={2} className="filter">
        <form onSubmit={findUsers}>
          <label>Name</label>
          <input type="search" onChange={handleName} value={name} />
          <label>Age</label>
          <div className="years">
            <select onChange={handleSelect} value={selectsFilters.lowAge} name="lowAge">
              {getOptions(lowYears)}
            </select>
            <div className="divider"></div>
            <select onChange={handleSelect} value={selectsFilters.highAge} name="highAge">
              {getOptions(hightYears)}
            </select>
          </div>
          <label>Sex</label>
          <div>
            <label>
              <input type="checkbox" checked={genders.male} onChange={handleGender} name="male" />
              Male
            </label>
            <label>
              <input type="checkbox" checked={genders.female} onChange={handleGender} name="female" />
              Female
            </label>
            <label>
              <input type="checkbox" checked={genders.other} onChange={handleGender} name="other" />
              Other
            </label>
          </div>
          <label>Country</label>
          <CountryDropdown value={country} onChange={val => selectCountry(val)} />
          <label>Language</label>
          <select onChange={handleSelect} value={selectsFilters.language} name="language">
            <option key={'Any language'} value={''}>
              Any language
            </option>
            {getOptions([], languages)}
          </select>
          <label>Level</label>
          <select onChange={handleSelect} value={selectsFilters.level} name="level">
            <option key={'Any level'} value={''}>
              Any level
            </option>
            {getOptions([], languageLevels)}
          </select>
          <label>Online</label>
          <input type="checkbox" checked={online.isOnline} onChange={handleOnline} name="isOnline" />
          <button type="submit">Search</button>
        </form>
      </Box>
      {showError ? (
        <Box boxShadow={2} className="not-found">
          Not found, try again
        </Box>
      ) : (
        <UserList users={users} />
      )}
    </Layout>
  );
};

export default Search;
