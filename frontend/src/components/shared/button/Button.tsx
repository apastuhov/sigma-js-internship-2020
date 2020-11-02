import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';

type ButtonProps = {
  name: string;
  color: string;
  link: string;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <Link to={`/${props.link}`} className={props.color}>
      {props.name}
    </Link>
  );
};

export default Button;
