import React from 'react';
import { add, multiple } from '../../utilities/calculate';

const Shoes = () => {
    const first = 15;
    const second = 30;
    const result = multiple(first, second);
    const sum = add(first, second);

    return (
        <div>
            <h1>This is Shoes componant.</h1>
            <p>Result: {result} and Sum: {sum}</p>
        </div>
    );
};

export default Shoes;