import React from 'react';
import { add } from '../../utilities/calculate';
import Cosmitic from '../Cosmitic/Cosmitic';
// import add from '../../utilities/calculate';

const Cosmitics = () => {
    const cosmitics = [
        {
            "id": "632ea9632a320ea5dac315fc",
            "price": 210,
            "name": "Coleman Macias"
        },
        {
            "id": "632ea963b60d3347fb0a585b",
            "price": 280,
            "name": "Frederick Gonzalez"
        },
        {
            "id": "632ea963b8f08d8a8e17cb3a",
            "price": 270,
            "name": "Lacy Jennings"
        },
        {
            "id": "632ea9637a51f57eac6c3213",
            "price": 300,
            "name": "Conner Moody"
        },
        {
            "id": "632ea963a0d75cd2376e682b",
            "price": 302,
            "name": "Kent Dudley"
        },
        {
            "id": "632ea963466acbab8523587a",
            "price": 380,
            "name": "Rutledge Clements"
        },
        {
            "id": "632ea9635a6ed30cbd043472",
            "price": 335,
            "name": "Angelique Blackburn"
        }
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
