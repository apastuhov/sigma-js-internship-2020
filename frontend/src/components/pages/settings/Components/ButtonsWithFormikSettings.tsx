import { useFormikContext } from 'formik';
import React from 'react';
import { patchRequest } from '../../../../services/apiUserService';
import { getUserFromStorage } from '../../../../services/sessionStorageService';
import { sex } from '../../../constants/constants';
import { Country } from '../../../constants/Countries';
import { FormikValues } from '../../../interfaces/Interface';
import Button from '../../../shared/button/Button';

export const ButtonWithFormikSettings: React.FC = props => {
  const { values } = useFormikContext<FormikValues>();

  const getMethodPriority = (country: keyof typeof Country) => {
    return Country[country];
  };

  const getSexPriority = (state: keyof typeof sex) => {
    return sex[state];
  };
  const user = getUserFromStorage();
  const id = user._id;
  const email = user.email;

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
        photo: values.fileUrl,
        about: values.about
      });
    }
  };

  return (
    <div className="settings-nav">
      <Button name="CANCEL" color="secondary" link="login" />
      <Button name="SAVE" color="primary" onClick={editUser} />
    </div>
  );
};
