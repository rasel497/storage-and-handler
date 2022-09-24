import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmitic from '../Cosmitic/Cosmitic';
// import add from '../../utilities/calculate';

const Cosmitics = () => {
    const cosmitics = [
        { id: 1, name: 'Alta', price: '470' },
        { id: 2, name: 'Lipsstek', price: '350' },
        { id: 3, name: 'Eyelanar', price: '220' },
        { id: 4, name: 'Hand Ring', price: '180' },
        { id: 5, name: 'Stich', price: '50', }
    ]

    return (
        <div>
            <h2>Welcom to my Modules.</h2>
            {
                // cosmitics.map(cosmitic => console.log(cosmitic))
                cosmitics.map(cosmitic => <Cosmitic
                    key={cosmitic.id}
                    cosmitic={cosmitic}
                ></Cosmitic>)
            }
        </div>
    );
};

export default Cosmitics;
