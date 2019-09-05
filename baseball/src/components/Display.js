import React from 'react';

const Display = props => {
    return (
        <div>
            <p>Ball: {props.values.ball} Strike: {props.values.strike} </p>
        </div>
    )
}

export default Display;