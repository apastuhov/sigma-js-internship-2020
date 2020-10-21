import Box from '@material-ui/core/Box';
import React from 'react';
import './chatSearch.scss';

const ChatSearch: React.FC = () => {
  return (
    <Box boxShadow={2} className="chat-search">
      <input type="search" className="search-input" placeholder="Search" />
    </Box>
  );
};

export default ChatSearch;
