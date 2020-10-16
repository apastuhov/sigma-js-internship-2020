import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface IProps {
  pageTitle: string;
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ pageTitle, children }: IProps) => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="page-title">{pageTitle}</h1>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
