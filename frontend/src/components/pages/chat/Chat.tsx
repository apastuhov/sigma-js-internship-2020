import React from 'react';
import Layout from '../../shared/layout/Layout';
import SearchTile from '../../shared/searchTile/SearchTile';

const Chat: React.FC = () => {
  return (
    <Layout pageTitle="Chat">
      <SearchTile />
      <div></div>
    </Layout>
  );
};

export default Chat;
