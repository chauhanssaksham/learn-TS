import React from 'react';
import Message from './components/message/message';
import './App.css';

const App: React.FC = ()=> {
  return (
    <div className="App">
      <Message message="yolo"/>
    </div>
  );
}

export default App;
