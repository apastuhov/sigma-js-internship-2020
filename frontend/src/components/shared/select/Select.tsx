import React, { useState } from 'react';
import './select.scss';

type SelectProps = {
  name: string;
  options: string[];
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
};

const getOptions = (arr: (string | number)[]) => {
  return arr.map((item, i) => (
    <option key={`${item}${i}`} value={item}>
      {item}
    </option>
  ));
};

const Select: React.FC<SelectProps> = props => {
  return (
    <div>
      <p>{props.label}</p>
      <select className="select" onChange={props.onChange} name={props.name} value={props.value}>
        {getOptions(props.options)}
      </select>
    </div>
  );
};

export default Select;
