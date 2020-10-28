import React from 'react';
import './languages.scss';
import Tile from '../../shared/tile/Tile';
import Box from '@material-ui/core/Box';
import LanguagesDetailInfo from './components/LanguagesDetailInfo';

const LanguagesInfo: React.FC = () => {
  return (
    <Tile>
      <Box boxShadow={2} className="tile">
        <h1>Languages</h1>
        <div className="languages-div">
          <LanguagesDetailInfo name="languages" label="I speak" />
          <hr color="#f7db17" />
          <LanguagesDetailInfo name="learnLanguages" label="I learn" />
        </div>
      </Box>
    </Tile>
  );
};

export default LanguagesInfo;
