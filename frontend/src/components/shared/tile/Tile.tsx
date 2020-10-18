import React, { ReactNode } from 'react';
import './tile.scss';

interface IProps {
  children: ReactNode;
}

const Tile: React.FC<IProps> = ({ children }: IProps) => {
  return <div>{children}</div>;
};

export default Tile;
