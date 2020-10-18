import React from 'react';
import './input.scss';

type InputProps = {
  name: string;
};
const Input: React.FC<InputProps> = props => {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <input className="input" />
    </React.Fragment>
  );
};

export default Input;
