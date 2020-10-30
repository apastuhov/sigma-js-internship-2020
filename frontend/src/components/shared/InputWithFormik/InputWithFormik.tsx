import React from 'react';
import { useField } from 'formik';
import Input from '../input/Input';

type InputProps = {
  name: string;
  label: string;
  type: string;
  maxAge?: string;
};

const InputWithFormik: React.FC<InputProps> = props => {
  const [field, meta] = useField(props.name);

  return (
    <Input
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      label={props.label}
      type={props.type}
      max={props.maxAge}
    />
  );
};

export default InputWithFormik;
