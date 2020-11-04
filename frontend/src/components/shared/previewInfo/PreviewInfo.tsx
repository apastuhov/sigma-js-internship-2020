import React from 'react';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import User from '../../mocks/user-mock.json';
import './previewInfo.scss';
import { useFormikContext } from 'formik';
import { Country } from '../../constants/Countries';
import { ILanguage } from '../../interfaces/Interface';
import UserCard from '../userCard/UserCard';

type FormikValues = {
  name: string;
  surname: string;
  age: number;
  birthday: string;
  languages: ILanguage[];
  learnLanguages: ILanguage[];
  fileUrl: string;
  sex: 'Male' | 'Female' | 'Other';
  country: any;
  about: string;
};

const PreviewInfo: React.FC = () => {
  const { values } = useFormikContext<FormikValues>();

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
            birthday: new Date(values.birthday),
            countryCode: getMethodPriority(values.country),
            speak: values.languages,
            learn: values.learnLanguages,
            avatar: values.fileUrl,
            country: values.country
          }}
          boxShadow={0}
        />
      </Box>
    </Tile>
  );
};

export default PreviewInfo;
