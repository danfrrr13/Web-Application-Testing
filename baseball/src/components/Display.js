import React from 'react';

const Display = props => {
    return (
        <div className='display'>
            <div className='displaySquare'>
                <h3>
                    Ball:
                </h3>
                <h1>
                    {props.values.ball}
                </h1>
            </div>
            <div className='displaySquare'>
                <h3>
                    Strike:
                </h3>
                <h1>
                    {props.values.strike}
                </h1>
            </div>
        </div>
    )
}

export default Display;