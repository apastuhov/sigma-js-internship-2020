import React from 'react';
import Box from '@material-ui/core/Box';
import './about.scss';

type AboutProps = {
  aboutInfo: string
}

const About: React.FC<AboutProps> = (props) => {
  return (
    <Box boxShadow={2} className="about">
      <h3>About</h3>
      <p>{props.aboutInfo}</p>
    </Box>
  );
};

export default About;