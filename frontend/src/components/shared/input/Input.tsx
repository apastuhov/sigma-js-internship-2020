import React from 'react';
import './input.scss';

type InputProps = {
  name: string;
  type: string;
};
const Input: React.FC<InputProps> = props => {
  return (
    <React.Fragment>
      <p>{props.name}</p>
      <input className="input" type={props.type} />
    </React.Fragment>
  );
};

export default Input;
