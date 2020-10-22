import React from 'react';
import './select.scss';

type SelectProps = {
  name: string;
};
const Select: React.FC<SelectProps> = props => {
  return (
    <div>
      <p>{props.name}</p>
      <select className="select" />
    </div>
  );
};

export default Select;
