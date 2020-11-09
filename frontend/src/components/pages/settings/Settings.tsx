import React, { useEffect, useState } from 'react';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import Button from '../../shared/button/Button';
import LanguagesInfo from '../../shared/languagesInfo/Languages';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import PreviewInfo from '../../shared/previewInfo/PreviewInfo';
import Tile from '../../shared/tile/Tile';
import './settings.scss';
import { Formik, useFormikContext } from 'formik';
import { getUserFromStorage } from '../../../services/localStorageService';
import { getUserDetails, getUserPosts } from '../../../services/apiUserService';
import { FormikValues } from '../../interfaces/Interface';
import { ButtonWithFormikSettings } from './Components/ButtonsWithFormikSettings';

const Settings: React.FC = () => {
  const { values, setValues } = useFormikContext<FormikValues>();
  const storageData = getUserFromStorage();

  const [userDetails, setUserDetails] = useState({
    name: storageData.firstName,
    surname: storageData.lastName,
    birthday: storageData.birthday,
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
  }, []);

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
              <div className="settings-nav">
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
