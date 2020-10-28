import React from 'react';
import { useField } from 'formik';
import Select from '../select/Select';

type SelectProps = {
  name: string;
  options: any;
  label?: string;
};

const SelectWithFormik: React.FC<SelectProps> = props => {
  const [field, meta] = useField(props.name);

  return (
    <Select
      name={field.name}
      options={props.options}
      label={props.label}
      value={field.value}
      onChange={field.onChange}
    />
  );
};

export default SelectWithFormik;
