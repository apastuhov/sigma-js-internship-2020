import React, { useState } from 'react';
import './select.scss';

type SelectProps = {
  name: string;
  options: string[];
  label?: string;
  value?: string;
  onChange?: (e: any) => void;
};

const Select: React.FC<SelectProps> = props => {
  return (
    <div>
      <p>{props.label}</p>
      <select className="select" onChange={props.onChange} name={props.name} value={props.value}>
        {props.options.map((item, i) => (
          <option key={`${item}${i}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
