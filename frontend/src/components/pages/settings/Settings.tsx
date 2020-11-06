
import { Box } from '@material-ui/core';
import { Formik } from 'formik';
import React, { useState } from 'react';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import Button from '../../shared/button/Button';
import LanguagesInfo from '../../shared/languagesInfo/Languages';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import PreviewInfo from '../../shared/previewInfo/PreviewInfo';
import Tile from '../../shared/tile/Tile';
import './settings.scss';

const Settings: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Layout pageTitle="Settings">
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
        <div className="wrapper">
          <MainInfo />
          <AdditionalInfo />
          <LanguagesInfo />
          <div>
            <PreviewInfo />
            <Tile>
              <Box boxShadow={2} className="tile">
                <div className="settings-nav">
                  {/*<Button name="BACK" color="secondary" link="" />*/}
                  {/*<Button name="SAVE" color="primary" link="" />*/}
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
