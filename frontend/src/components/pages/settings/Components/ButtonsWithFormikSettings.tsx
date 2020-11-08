import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { patchRequest, postRequest } from '../../../../services/apiUserService';
import { FormikValues } from '../../../interfaces/Interface';
import Button from '../../../shared/button/Button';
import { Country } from '../../../constants/Countries';
import { sex } from '../../../constants/constants';
import { getUserFromStorage } from '../../../../services/localStorageService';

const storageData = getUserFromStorage();

export const ButtonWithFormikSettings: React.FC = props => {
  const { values } = useFormikContext<FormikValues>();

  const getMethodPriority = (country: keyof typeof Country) => {
    return Country[country];
  };

  const getSexPriority = (state: keyof typeof sex) => {
    return sex[state];
  };

  const id = '5fa160253e283303946d8a33';
  const email = storageData.email;

  const editUser = () => {
    patchRequest(`user/edit/${id}`, {
      firstName: values.name,
      lastName: values.surname,
      sex: getSexPriority(values.sex),
      email: email,
      birthday: values.birthday,
      country: values.country,
      countryCode: getMethodPriority(values.country),
      speak: values.languages,
      learn: values.learnLanguages,
      photo: values.fileUrl,
      about: values.about
    }).then(console.log);
  };

  return (
    <div className="register-nav">
      <Button name="CANCEL" color="secondary" link="login" />
      <Button name="SIGN UP" color="primary" onClick={editUser} />
    </div>
  );
};
