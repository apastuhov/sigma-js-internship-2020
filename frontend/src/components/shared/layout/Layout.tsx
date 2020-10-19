import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Layout.scss';

interface IProps {
  pageTitle: string;
  children: ReactNode;
  countTiles?: number;
}

const Layout: React.FC<IProps> = ({ pageTitle, children, countTiles }: IProps) => {
  const tileName = Boolean(countTiles) ? (
    <>
      <h1 className="page-title-friends">{pageTitle}</h1>
      <span>({countTiles})</span>
    </>
  ) : (
    <h1 className="page-title">{pageTitle}</h1>
  );
  return (
    <div>
      <Header />
      <div className="container">
        {tileName}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
