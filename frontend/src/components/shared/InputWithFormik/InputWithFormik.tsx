import { useField } from 'formik';
import React from 'react';
import Input from '../input/Input';

type InputProps = {
  name: string;
  label: string;
  type: string;
  currentDate?: string;
};

const InputWithFormik: React.FC<InputProps> = props => {
  const [field] = useField(props.name);

  return (
    <Input
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      label={props.label}
      type={props.type}
      currentDate={props.currentDate}
    />
  );
};

export default InputWithFormik;
