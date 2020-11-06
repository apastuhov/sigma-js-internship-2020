import React from 'react';
import Routes from './routes/Routes';
import { Store } from './components/storage/context';

function App() {
  return (
    <div className="App">
      <Store>
        <Routes />
      </Store>
    </div>
  );
}

export default App;
