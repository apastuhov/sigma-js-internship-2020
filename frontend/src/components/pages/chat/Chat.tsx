import React from 'react';
import Layout from '../../shared/layout/Layout';
import { ChatList } from './components/chatList/ChatList';
import { MessageList } from './components/messageList/MessageList';

const Chat: React.FC = () => {
  return (
    <Layout pageTitle="Chat">
      <div className="chat-container">
        <ChatList />
        <MessageList />
      </div>
    </Layout>
  );
};

export default Chat;
