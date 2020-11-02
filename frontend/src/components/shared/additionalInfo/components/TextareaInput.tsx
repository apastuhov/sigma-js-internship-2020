import React from 'react';
import { useField } from 'formik';

type InputProps = {
  name: string;
};

const TextareaInput: React.FC<InputProps> = props => {
  const [field, meta] = useField(props.name);

  return (
    <textarea
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      rows={10}
      cols={51}
      className="textarea"
    />
  );
};

export default TextareaInput;
