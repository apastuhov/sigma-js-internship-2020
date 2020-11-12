import React from 'react';
import Routes from './routes/Routes';
import { FriendsProvider } from './components/storage/friends/friendsContext';

function App() {
  return (
    <div className="App">
      <FriendsProvider>
        <Routes />
      </FriendsProvider>
    </div>
  );
}

export default App;
