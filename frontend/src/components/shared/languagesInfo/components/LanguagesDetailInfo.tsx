import React from 'react';
import { FieldArray, useFormikContext, useField } from 'formik';
import '../languages.scss';
import { languages, languageLevels } from '../../../constants/constants';
import Select from '../../select/Select';

interface ILanguage {
  name: string;
  index: number;
  label: string;
}

interface ILanguages {
  name: string;
  label: string;
}

const LanguagesBlock: React.FC<ILanguage> = props => {
  const [field, , helpers] = useField(`${props.name}.${props.index}`);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    helpers.setValue({ ...field.value, [e.target.name]: e.target.value });

  return (
    <div className="select-wrapper">
      <Select
        label={props.label}
        name="language"
        options={Object.values(languages)}
        value={field.value.language}
        onChange={handleChange}
      />
      <Select label="Level" name="level" options={Object.values(languageLevels)} value={field.value.level} onChange={handleChange} />
    </div>
  );
};

const LanguagesDetailInfo: React.FC<ILanguages> = props => {
  const { values } = useFormikContext<any>();

  return (
    <div>
      <FieldArray
        name={props.name}
        render={arrayHelpers => (
          <div>
            {values[props.name].map((language: string, index: number) => (
              <LanguagesBlock name={props.name} index={index} label={props.label} />
            ))}
            <button
              onClick={() =>
                arrayHelpers.insert(values[props.name].length, {
                  language: '',
                  level: ''
                })
              }
              className="btn-add-lang"
            >
              [+ add a language]
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default LanguagesDetailInfo;
