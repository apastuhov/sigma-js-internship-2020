import React from 'react';
import './compose.scss';

export const Compose: React.FC = () => {
  return (
    <div className="compose">
      <input type="text" className="compose-input" placeholder="Write a message..." />
    </div>
  );
};
