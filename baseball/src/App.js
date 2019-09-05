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
  const ball = e => {
    e.preventDefault();
    setValues(prevValues => ({...prevValues, ball: prevValues.ball + 1}));
  }
  const strike = e => {
    e.preventDefault();
    setValues(prevValues => ({...prevValues, strike: prevValues.strike + 1}));
  }
  const hit = e => {
    e.preventDefault();
    setValues(prevValues => ({...prevValues, hit: prevValues.hit + 1}));
  }
  const foul = e => {
    e.preventDefault();
    setValues(prevValues => ({...prevValues, foul: prevValues.foul + 1}));
    if (values.strike === 0 || values.strike === 1) {
      setValues(prevValues => ({...prevValues, strike: prevValues.strike + 1}));
    } 
  }
  const reset = e => {
    e.preventDefault();
    setValues({
      ball: 0,
      strike: 0,
      hit: 0,
      foul: 0
    })
  }
  

  return (
    <div className="App">
      <Display values={values} />
      <Dashboard ball={ball} strike={strike} hit={hit} foul={foul} reset={reset} />
    </div>
  );
}

export default App;
