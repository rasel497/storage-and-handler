import React, { useEffect, useState } from 'react';
import { add, getTotal } from '../../utilities/calculate';
import Cosmitic from '../Cosmitic/Cosmitic';
// import add from '../../utilities/calculate';

const Cosmitics = () => {
    const [cosmitics, setCosmitic] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmitic(data))
    }, [])

    // get total price
    const total = getTotal(cosmitics);

    return (
        <div>
            <h2>Welcom to my Modules.</h2>
            <h4>Money Total: {total}</h4>

            {
                // cosmitics.map(cosmitic => console.log(cosmitic))
                cosmitics.map(cosmitic =>
                    <Cosmitic key={cosmitic.id} cosmitic={cosmitic}></Cosmitic>)
            }
        </div>
    );
};

export default Cosmitics;
