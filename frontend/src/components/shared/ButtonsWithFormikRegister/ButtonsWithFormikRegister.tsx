import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postRequest } from '../../../services/apiService';
import { toDataURL } from '../../../services/convertImageService';
import { getUserFromStorage, saveUserToStorage } from '../../../services/sessionStorageService';
import { sex } from '../../constants/constants';
import { Country } from '../../constants/Countries';
import { FormikValues } from '../../interfaces/Interface';
import Button from '../button/Button';

const getMethodPriority = (country: keyof typeof Country) => {
  return Country[country];
};

const getSexPriority = (state: keyof typeof sex) => {
  return sex[state];
};

export const ButtonWithFormikRegister: React.FC = props => {
  const { values } = useFormikContext<FormikValues>();
  const [userImage, setUserImage] = useState<string>();
  const [userEmail] = useState<string>(getUserFromStorage());
  const history = useHistory();

  useEffect(() => {
    toDataURL(values.fileUrl).then(dataUrl => {
      setUserImage(dataUrl);
    });
  }, [values.fileUrl]);

  const submitUser = () => {
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
      avatar: userImage,
      about: values.about
    })
      .then(res => {
        saveUserToStorage(res);
        history.push('/');
      })
      .catch(() => history.push('/register'));
  };

  return (
    <div className="register-nav">
      <Button name="CANCEL" color="secondary" link="login" />
      <Button name="SIGN UP" color="primary" onClick={submitUser} />
    </div>
  );
};
