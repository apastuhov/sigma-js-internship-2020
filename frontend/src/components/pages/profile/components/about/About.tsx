import React from 'react';
import Box from '@material-ui/core/Box';
import './about.scss';
import { IAboutProps } from '../../../../interfaces/Interface';

const About: React.FC<IAboutProps> = ({ about }) => {
  return (
    <Box boxShadow={2} className="about">
      <h3>About</h3>
      <p>{about}</p>
    </Box>
  );
};

export default About;
