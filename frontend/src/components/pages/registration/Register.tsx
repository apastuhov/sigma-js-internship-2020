import React, { useContext, useState } from 'react';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import LanguagesInfo from '../../shared/languagesInfo/Languages';
import PreviewInfo from '../../shared/previewInfo/PreviewInfo';
import Tile from '../../shared/tile/Tile';
import './registration.scss';
import { Box } from '@material-ui/core';
import Button from '../../shared/button/Button';
import { Formik } from 'formik';

const Register: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Layout pageTitle="Registration">
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
                <p className="privacy-policy"> By clicking "Sign Up" you agree to our Terms and Privacy Policy</p>
                <div className="register-nav">
                  <Button name="CANCEL" color="secondary" link="login" />
                  <Button name="SIGN UP" color="primary" link="" />
                </div>
              </Box>
            </Tile>
          </div>
        </div>
      </Formik>
    </Layout>
  );
};

export default Register;
