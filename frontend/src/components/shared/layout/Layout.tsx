import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

type Props = {
  PageTitle: string;
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ PageTitle, children }: Props) => {
  return (
    <div>
      <Header />
      <div className="container">
        <p className="page-title">{PageTitle}</p>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
