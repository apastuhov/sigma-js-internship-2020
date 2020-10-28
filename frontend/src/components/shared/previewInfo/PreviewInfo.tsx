import React from 'react';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import { UserCard } from '../userCard/UserCard';
import User from '../../mocks/user-mock.json';
import './previewInfo.scss';
import { useFormik, useFormikContext } from 'formik';
import { Country } from '../../constants/Countries';
import { Languages } from '../../interfaces/Interface';

type FormikValues = {
  name: string;
  surname: string;
  age: number;
  birthday: string;
  languages: Languages[];
  learnLanguages: Languages[];
  fileUrl: string;
  sex: string;
  country: any;
  about: any;
};

const PreviewInfo: React.FC = () => {
  const { values } = useFormikContext<FormikValues>();

  function getOld(dateString: string): number {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const old = getOld(values.birthday);

  const getMethodPriority = (country: keyof typeof Country) => {
    return Country[country];
  };

  return (
    <Tile>
      <Box boxShadow={2} className="preview-tile">
        <h1 className="preview-h1">Preview</h1>
        <UserCard
          mainInfo={{
            ...User,
            firstName: values.name,
            lastName: values.surname,
            age: old,
            speaks: values.languages,
            learn: values.learnLanguages,
            photoUrl: values.fileUrl
          }}
          boxShadow={0}
        />
      </Box>
    </Tile>
  );
};

export default PreviewInfo;
