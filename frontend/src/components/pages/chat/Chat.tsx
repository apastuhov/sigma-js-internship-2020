import React from 'react';
import Layout from '../../shared/layout/Layout';
import { ChatList } from './components/chatList/ChatList';
import { MessageList } from './components/messageList/MessageList';

const Chat: React.FC = () => {
  // onChatSelected(id){
  //   Service(getChatMessages)
  //   useState for id
  // }
  return (
    <Layout pageTitle="Chat">
      <div className="chat-container">
        <ChatList />
        <MessageList />
        {/* activeChatId={id} */}
      </div>
    </Layout>
  );
};

export default Chat;
