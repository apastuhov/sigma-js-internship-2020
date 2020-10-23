import React from 'react';
import Box from '@material-ui/core/Box';
import './about.scss';
import { AboutInfo } from '../../../../interfaces/Interface';

const About: React.FC<AboutInfo> = ({ aboutInfo }) => {
  return (
    <Box boxShadow={2} className="about">
      <h3>About</h3>
      <p>{aboutInfo}</p>
    </Box>
  );
};

export default About;
