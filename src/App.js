import './App.css';
import React from 'react';

import StateManagement from './StateManagement/StateManagement'
import MainHooks from './Hooks/MainHooks'
import MainPromises from './AsyncOperationHandling/Promises/MainPromises';
import MainAyncAwait from './AsyncOperationHandling/AsyncAwait/MainAsyncAwait'

function App() {
  return (
    <div className="App-header">
      <StateManagement />
      {/* <MainHooks /> */}
      {/* <MainPromises/> */}
      {/* <MainAyncAwait/> */}
    </div>
  );
}

export default App;
