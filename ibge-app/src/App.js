import React from 'react';
import StateList from './components/StateList';
import Header from './components/Header';

function App() {
  return (
    <div style={{minHeight: '100vh', backgroundColor: '#F2ECE7'}}>
      <Header />
      <StateList />
    </div>
  );
}

export default App;