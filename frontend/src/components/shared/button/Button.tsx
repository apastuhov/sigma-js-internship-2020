import React from 'react';
import './button.scss';
import { Link } from 'react-router-dom';
import { FormikValues, useFormikContext } from 'formik';

type ButtonProps = {
  name: string;
  color: string;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = props => {
  return (
    <button className={props.color} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;
