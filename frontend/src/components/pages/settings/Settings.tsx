import React from 'react';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import LanguagesInfo from '../../shared/languagesInfo/Languages';
import PreviewInfo from '../../shared/previewInfo/PreviewInfo';
import Tile from '../../shared/tile/Tile';
import { Box } from '@material-ui/core';
import './settings.scss';
import Button from '../../shared/button/Button';

const Settings: React.FC = () => {
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
                <Button name="BACK" style="secondary" />
                <Button name="SAVE" style="primary" />
              </div>
            </Box>
          </Tile>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
