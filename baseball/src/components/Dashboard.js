import React from 'react';

const Dashboard = props => {
    const ball = e => {
        e.preventDefault();
        props.setValues(prevValues => ({...prevValues, ball: prevValues.ball + 1}));
      }
    const strike = e => {
        e.preventDefault();
        props.setValues(prevValues => ({...prevValues, strike: prevValues.strike + 1}));
      }
    const hit = e => {
        e.preventDefault();
        props.setValues(prevValues => ({...prevValues, hit: prevValues.hit + 1}));
      }
    const foul = e => {
        e.preventDefault();
        props.setValues(prevValues => ({...prevValues, foul: prevValues.foul + 1}));
        if (props.values.strike === 0 || props.values.strike === 1) {
          props.setValues(prevValues => ({...prevValues, strike: prevValues.strike + 1}));
        } 
      }
    const reset = e => {
        e.preventDefault();
        props.setValues({
          ball: 0,
          strike: 0,
          hit: 0,
          foul: 0
        })
      }
    return (
        <div>
            <button onClick={ball}>Ball</button>
            <button onClick={strike}>Strike</button>
            <button onClick={hit}>Hit</button>
            <button onClick={foul}>Foul</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Dashboard;