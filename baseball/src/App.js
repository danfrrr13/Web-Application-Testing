import React, { useState } from 'react';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [values, setValues] = useState({
    ball: 0,
    strike: 0,
    hit: 0,
    foul: 0
  });
  

  return (
    <div className="App">
      <Display values={values} />
      <Dashboard values={values} setValues={setValues} />
    </div>
  );
}

export default App;
