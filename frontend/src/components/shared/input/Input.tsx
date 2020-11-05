import React from 'react';
import './input.scss';

type InputProps = {
  name: string;
  label: string;
  type: string;
  onChange: any;
  value: string;
  currentDate?: string;
};

const Input: React.FC<InputProps> = props => {
  return (
    <div>
      <p>{props.label}</p>
      <input
        className="input"
        type={props.type || 'text'}
        onChange={props.onChange}
        name={props.name}
        value={props.value}
        max={props.currentDate}
      />
    </div>
  );
};

export default Input;
