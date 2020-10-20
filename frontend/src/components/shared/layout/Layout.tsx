import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface IProps {
  pageTitle: string;
  children: ReactNode;
  countFriends?: number;
}

const Layout: React.FC<IProps> = ({ pageTitle, children, countFriends }: IProps) => {
  const pageName = Boolean(countFriends) ? (
    <>
      <h1 className="page-title-friends">{pageTitle}</h1>
      <span>({countFriends})</span>
    </>
  ) : (
    <h1 className="page-title">{pageTitle}</h1>
  );
  return (
    <div>
      <Header />
      <div className="container">
        {pageName}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
