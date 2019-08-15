import React from 'react';
import './App.css';

import Panel from './components/Panel';
import View from './components/View';

function App() {
  return (
    <div className='App'>
      <div className='buttons'>
        <button>Random Content</button>
        <Panel />
      </div>
      <View />
    </div>
  );
}

export default App;
