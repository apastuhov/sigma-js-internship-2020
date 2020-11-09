import React, { useState } from 'react';
import Layout from '../../../shared/layout/Layout';
import '../settings.scss';
import { Formik, useFormikContext } from 'formik';
import Setting from '../Settings';
import { getUserFromStorage } from '../../../../services/localStorageService';
import { FormikValues } from '../../../interfaces/Interface';

const Settings: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={{
        birthday: '',
        languages: [
          {
            language: '',
            level: ''
          }
        ],
        surname: '',
        name: '',
        learnLanguages: [
          {
            language: '',
            level: ''
          }
        ],
        age: 0,
        fileUrl: '',
        sex: '',
        country: ''
      }}
      onSubmit={handleSubmit}
    >
      <Setting />
    </Formik>
  );
};

export default Settings;
