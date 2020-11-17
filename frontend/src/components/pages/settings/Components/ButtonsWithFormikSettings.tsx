import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { patchRequest } from '../../../../services/apiUserService';
import { toDataURL } from '../../../../services/convertImageService';
import { getUserFromStorage, saveUserToStorage } from '../../../../services/sessionStorageService';
import { sex } from '../../../constants/constants';
import { Country } from '../../../constants/Countries';
import { FormikValues } from '../../../interfaces/Interface';
import Button from '../../../shared/button/Button';
import './ButtonsWithFormikSettings.scss';

export const ButtonWithFormikSettings: React.FC = props => {
  const { values } = useFormikContext<FormikValues>();
  const [userImage, setUserImage] = useState<string>();

  const getMethodPriority = (country: keyof typeof Country) => {
    return Country[country];
  };

  const getSexPriority = (state: keyof typeof sex) => {
    return sex[state];
  };
  const user = getUserFromStorage();
  const id = user._id;
  const email = user.email;

  useEffect(() => {
    toDataURL(values.fileUrl).then(dataUrl => {
      setUserImage(dataUrl);
    });
  }, [values.fileUrl]);

  const editUser = () => {
    if (id) {
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
        avatar: userImage,
        about: values.about
      }).then(res => saveUserToStorage(res));
    }
  };

  return (
    <div className="settings-nav">
      <Link to="/" className="link-to-profile">
        <Button name="CANCEL" color="secondary" />
      </Link>
      <Button name="SAVE" color="primary" onClick={editUser} />
    </div>
  );
};
