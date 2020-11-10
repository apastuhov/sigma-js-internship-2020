import { Formik } from 'formik';
import React from 'react';
import Setting from '../Settings';
import '../settings.scss';

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
