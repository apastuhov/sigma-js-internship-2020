import React from 'react';
import Layout from '../../shared/layout/Layout';
import MainInfo from '../../shared/mainInfo/MainInfo';
import AdditionalInfo from '../../shared/additionalInfo/AdditionalInfo';
import './registration.scss';

const Register: React.FC = () => {
  return (
    <Layout pageTitle="Registration">
      <div className="wrapper">
        <MainInfo />
        <AdditionalInfo />
        <AdditionalInfo />
      </div>
    </Layout>
  );
};

export default Register;
