import { Box } from '@material-ui/core';
import dayjs from 'dayjs';
import { useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { getUserFromStorage } from '../../../services/sessionStorageService';
import { FormikValues } from '../../interfaces/Interface';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import LanguagesInfo from '../../shared/languagesInfo/Languages';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import PreviewInfo from '../../shared/previewInfo/PreviewInfo';
import Tile from '../../shared/tile/Tile';
import { ButtonWithFormikSettings } from './Components/ButtonsWithFormikSettings';
import './settings.scss';

const Settings: React.FC = () => {
  const { setValues } = useFormikContext<FormikValues>();
  const storageData = getUserFromStorage();

  const [userDetails] = useState({
    name: storageData.firstName,
    surname: storageData.lastName,
    birthday: dayjs(storageData.birthday).format('YYYY-MM-DD'),
    country: storageData.country,
    languages: storageData.speak,
    learnLanguages: storageData.learn,
    age: storageData.age,
    sex: storageData.sex,
    fileUrl: storageData.avatar,
    about: storageData.about
  });

  useEffect(() => {
    setValues(userDetails);
  }, [setValues, userDetails]);

  return (
    <Layout pageTitle="Settings">
      <div className="wrapper">
        <MainInfo />
        <AdditionalInfo />
        <LanguagesInfo />
        <div>
          <PreviewInfo />
          <Tile>
            <Box boxShadow={2} className="tile">
              <div>
                <ButtonWithFormikSettings />
              </div>
            </Box>
          </Tile>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
