import React from 'react';
import add from '../../utilities/calculate';

const Cosmitics = () => {
    const first = 55;
    const second = 66;
    const total = add(first, second);

    return (
        <div>
            <h2>Welcom to my Modules.</h2>
            <p>total: {total}</p>
        </div>
    );
};

export default Cosmitics;
