import React from 'react';

const Display = props => {
    return (
        <div>
            <p>Ball: {props.values.ball} Strike: {props.values.strike} Hit: {props.values.hit} Foul: {props.values.foul} </p>
        </div>
    )
}

export default Display;