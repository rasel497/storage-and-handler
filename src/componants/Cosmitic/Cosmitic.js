import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmitic.css'

const Cosmitic = (props) => {
    const { name, price, id } = props.cosmitic;

    const addToCart = (id) => {
        // console.log('add items', id); //only item add console
        // sessionStorage.setItem(id, 1); // item set local stroge in this line
        // ekhon amra alada vabe localStorage mange koerer jonno fakedb.js file create korlm
        addToDb(id);
    }
    // const addToCartWithPara = () => addToCart(id
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p>This id: {id}</p>

            <button onClick={() => addToCart(id)}>Add to cart</button>
        </div>
    );
};

export default Cosmitic;