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
  return (
    <div>
      <Header />
      <div className="container">
        <>
          <h1 className={Boolean(countFriends) ? 'title title-friends' : 'title'}>{pageTitle}</h1>
          {Boolean(countFriends) && <span>({countFriends})</span>}
        </>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
