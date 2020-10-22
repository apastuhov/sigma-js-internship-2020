import React from 'react';
import Select from '../../select/Select';
import '../languages.scss';

interface ILanguage {
  do: string;
  level: string;
}

const LanguagesDetailInfo: React.FC<ILanguage> = (props: ILanguage) => {
  return (
    <div>
      <div className="languages-wrapper">
        <Select name={props.do} />
        <Select name={props.level} />
      </div>
      <button className="btn-add-lang">[+ add a language]</button>
    </div>
  );
};

export default LanguagesDetailInfo;
