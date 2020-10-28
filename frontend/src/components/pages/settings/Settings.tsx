import React, { useState } from 'react';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import LanguagesInfo from '../../shared/languagesInfo/Languages';
import PreviewInfo from '../../shared/previewInfo/PreviewInfo';
import Tile from '../../shared/tile/Tile';
import { Box } from '@material-ui/core';
import './settings.scss';
import Button from '../../shared/button/Button';
import { Formik } from 'formik';

const Settings: React.FC = () => {
  const [mainInfo, setInfo] = useState({ name: '', surname: '' });
  const handleSubmit = () => {};

  return (
    <Layout pageTitle="Settings">
      <Formik
        initialValues={{
          name: '',
          languages: [
            {
              language: '',
              level: ''
            }
          ],
          learnLanguages: [
            {
              language: '',
              level: ''
            }
          ],
          age: 0,
          fileUrl: ''
        }}
        onSubmit={handleSubmit}
      >
        <div className="wrapper">
          <MainInfo />
          <AdditionalInfo />
          <LanguagesInfo />
          <div>
            <PreviewInfo />
            <Tile>
              <Box boxShadow={2} className="tile">
                <div className="settings-nav">
                  <Button name="BACK" color="secondary" link="" />
                  <Button name="SAVE" color="primary" link="" />
                </div>
              </Box>
            </Tile>
          </div>
        </div>
      </Formik>
    </Layout>
  );
};

export default Settings;
