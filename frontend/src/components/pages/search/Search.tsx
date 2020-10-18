import React, { useState } from 'react';
import Layout from '../../shared/layout/Layout';
import UserList from '../../shared/userList/UserList';
import Users from '../../mocks/users-mock.json';
import { Box } from '@material-ui/core';
import { CountryDropdown } from 'react-country-region-selector';
// import { countries } from "typed-countries";
import './search.scss';

const Search: React.FC = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [checkbox, setCheckbox] = useState({
    male: false,
    female: false,
    online: false
  });

  const [selects, setSelects] = useState({
    lowAge: '13',
    highAge: '99',
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
    setCheckbox({ ...checkbox, [e.target.name]: e.target.checked });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelects({ ...selects, [e.target.name]: e.target.value });
  };

  const getGender = () => {
    if ((!checkbox.female && !checkbox.male) || (checkbox.female && checkbox.male)) {
      return '';
    }
    return Boolean(checkbox.male) ? 'male' : 'female';
  };

  const getOptions = (arr: (string | number)[]) => {
    return arr.map((item, i) => (
      <option key={`${item}${i}`} value={item}>
        {item}
      </option>
    ));
  };

  const findUsers = (e: React.FormEvent) => {
    const request = {
      name: name,
      lowAge: selects.lowAge,
      highAge: selects.highAge,
      sex: getGender(),
      country: country,
      language: selects.language,
      level: selects.level,
      online: checkbox.online
    };
    e.preventDefault();
    console.log(JSON.stringify(request));
  };

  const years: number[] = [];
  for (let i = 13; i < 100; i++) {
    years.push(i);
  }
  const language = ['Any language', 'Turkish', 'Japanese', 'German', 'Portuguese', 'Ukrainian', 'English'].sort();
  const level = ['Any level', 'Elementary', 'Pre-intermediate', 'Intermediate', 'Upper Intermediate', 'Advanced'];

  return (
    <Layout pageTitle="Search">
      <Box boxShadow={2} className="filter">
        <form onSubmit={findUsers}>
          <label>Name</label>
          <input type="text" onChange={handleName} value={name} />
          <label>Age</label>
          <div className="years">
            <select onChange={handleSelect} value={selects.lowAge} name="lowAge">
              {getOptions(years)}
            </select>
            <div className="divider"></div>
            <select onChange={handleSelect} value={selects.highAge} name="highAge">
              {getOptions(years)}
            </select>
          </div>
          <label>Sex</label>
          <div>
            <label>
              <input type="checkbox" checked={checkbox.male} onChange={handleCheckbox} name="male" />
              Male
            </label>
            <label>
              <input type="checkbox" checked={checkbox.female} onChange={handleCheckbox} name="female" />
              Female
            </label>
          </div>
          <label>Country</label>
          <CountryDropdown value={country} onChange={val => selectCountry(val)} />
          <label>Language</label>
          <select onChange={handleSelect} value={selects.language} name="language">
            {getOptions(language)}
          </select>
          <label>Level</label>
          <select onChange={handleSelect} value={selects.level} name="level">
            {getOptions(level)}
          </select>
          <label>Online</label>
          <input type="checkbox" checked={checkbox.online} onChange={handleCheckbox} name="online" />
          <button type="submit">Search</button>
        </form>
      </Box>
      <UserList users={Users} />
    </Layout>
  );
};

export default Search;
