import React, { useEffect } from 'react';

const Dashboard = props => {
    useEffect(() => {
        if (props.values.ball > 3) {
            reset();
        }
    }, [props.values.ball]);
    useEffect(() => {
        if (props.values.strike > 2) {
            reset();
        }
    }, [props.values.strike]);
    const ball = ballScore => {
        props.setValues(prevValues => ({...prevValues, ball: prevValues.ball + 1}));
        
    }
    const strike = () => {
        props.setValues(prevValues => ({...prevValues, strike: prevValues.strike + 1}));
    }
    const hit = () => {
        props.setValues(prevValues => ({...prevValues, hit: prevValues.hit + 1}));
        reset();
    }
    const foul = () => {
        props.setValues(prevValues => ({...prevValues, foul: prevValues.foul + 1}));
        if (props.values.strike === 0 || props.values.strike === 1) {
          props.setValues(prevValues => ({...prevValues, strike: prevValues.strike + 1}));
        } 
    }
    const reset = () => {
        props.setValues({
          ball: 0,
          strike: 0,
          hit: 0,
          foul: 0
        })
      }
    return (
        <div className='dashboard'>
            <div className='mainButtons'>
                <button onClick={ball}>Ball</button>
                <button onClick={strike}>Strike</button>
                <button onClick={hit}>Hit</button>
                <button onClick={foul}>Foul</button>
            </div>
        </div>
    )
}

export default Dashboard;