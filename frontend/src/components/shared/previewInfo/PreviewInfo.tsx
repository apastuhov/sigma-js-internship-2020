import Box from '@material-ui/core/Box';
import { useFormikContext } from 'formik';
import React from 'react';
import { Country } from '../../constants/Countries';
import { FormikValues } from '../../interfaces/Interface';
import User from '../../mocks/user-mock.json';
import Tile from '../../shared/tile/Tile';
import UserCard from '../userCard/UserCard';
import './previewInfo.scss';

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
          isProfile
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
