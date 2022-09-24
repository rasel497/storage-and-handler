import React from 'react';

const Cosmitic = (props) => {
    const { name, price, id } = props.cosmitic;

    return (
        <div>
            <h2>Buy this: {name}</h2>
            <p>Only for: {price}</p>
            <p>This id: {id}</p>
        </div>
    );
};

export default Cosmitic;