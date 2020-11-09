import React, { useState, useEffect } from 'react';
import { useFormikContext } from 'formik';
import { useHistory } from 'react-router-dom';
import { postRequest } from '../../../services/apiService';
import { sex } from '../../constants/constants';
import { Country } from '../../constants/Countries';
import { FormikValues } from '../../interfaces/Interface';
import Button from '../button/Button';
import { saveUserToStorage, getUserFromStorage } from '../../../services/localStorageService';
import { toDataURL } from '../../../services/convertImageService';

const getMethodPriority = (country: keyof typeof Country) => {
  return Country[country];
};

const getSexPriority = (state: keyof typeof sex) => {
  return sex[state];
};

export const ButtonWithFormikRegister: React.FC = props => {
  const { values } = useFormikContext<FormikValues>();
  const [userImage, setUserImage] = useState<string>();
  const [userEmail, setUserEmail] = useState<string>(getUserFromStorage());
  const history = useHistory();

  useEffect(() => {
    toDataURL(values.fileUrl).then(dataUrl => {
      setUserImage(dataUrl);
    });
  }, [values.fileUrl]);

  const submitUser = () => {
    // TIME DECISION
    const user = {
      firstName: values.name,
      lastName: values.surname,
      sex: getSexPriority(values.sex),
      email: userEmail,
      birthday: values.birthday,
      country: values.country,
      countryCode: getMethodPriority(values.country),
      speak: values.languages,
      learn: values.learnLanguages,
      avatar: userImage,
      about: values.about
    };
    saveUserToStorage(user);
    postRequest('user/register', {
      firstName: values.name,
      lastName: values.surname,
      sex: getSexPriority(values.sex),
      email: userEmail,
      birthday: values.birthday,
      country: values.country,
      countryCode: getMethodPriority(values.country),
      speak: values.languages,
      learn: values.learnLanguages,
      avatar: values.fileUrl,
      about: values.about
    })
      .then(() => history.push('/'))
      .catch(() => history.push('/register'));
  };

  return (
    <div className="register-nav">
      <Button name="CANCEL" color="secondary" link="login" />
      <Button name="SIGN UP" color="primary" onClick={submitUser} />
    </div>
  );
};
