import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import apiService from '../../../services/apiService';
import { hightLimit, languageLevels, languages, lowLimit } from '../../constants/constants';
import { dataType } from '../../interfaces/Interface';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import './search.scss';

const Search: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [showError, setShowError] = useState('');
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
      const users = await apiService(dataType.users);
      setUsers(users);
    }
    getUsers();
  }, []);

  const getGenders = () => {
    const arrGenders: Array<string> = [];
    const genderFilters = Object.values(genders);

    if (genderFilters.every(e => e) || genderFilters.every(e => !e)) {
      return '';
    }
    //TODO: wait for enum in other pull request
    if (genders.male) {
      arrGenders.push('male');
    }
    if (genders.female) {
      arrGenders.push('female');
    }
    if (genders.other) {
      arrGenders.push('other');
    }

    return arrGenders;
  };

  const getOptions = (arr: (string | number)[]) => {
    return arr.map((item, i) => (
      <option key={`${item}${i}`} value={item}>
        {item}
      </option>
    ));
  };

  const convertAge = (age: number): Date => {
    const now = new Date().getFullYear();
    return new Date(`${now - age},12,31`);
  };

  const findUsers = (e: React.FormEvent) => {
    const requestBody = {
      name: name,
      lowAge: convertAge(selectsFilters.lowAge),
      highAge: convertAge(selectsFilters.highAge),
      sex: getGenders(),
      country: country,
      language: selectsFilters.language === languages[0] ? '' : selectsFilters.language,
      level: selectsFilters.level === languageLevels[0] ? '' : selectsFilters.level,
      isOnline: online.isOnline
    };
    e.preventDefault();
    apiService(dataType.filter, requestBody).then(users => {
      if (users.length) {
        setUsers(users);
        setShowError('');
      } else {
        setShowError('show');
      }
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
            {getOptions(languages)}
          </select>
          <label>Level</label>
          <select onChange={handleSelect} value={selectsFilters.level} name="level">
            {getOptions(languageLevels)}
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
