import React from 'react';
import { addToDb, deleteShoppingCart, deleteShoppingCartFromBd, removeFromDb } from '../../utilities/fakedb';
import './Cosmitic.css'

const Cosmitic = (props) => {
    const { name, price, id } = props.cosmitic;

    //add one item in button event handler
    const addToCart = (id) => {
        // console.log('add items', id); //only item add console
        // sessionStorage.setItem(id, 1); // item set local stroge in this line
        // ekhon amra alada vabe localStorage mange koerer jonno fakedb.js file create korlm
        addToDb(id);
    }

    //remove one item in button event handler
    const removeFromCart = id => {
        // console.log('removing', id); initial test
        removeFromDb(id); // link from fakeDb.js file
    }

    //delete full shopping-cart in button event handler
    const deleteShoppingCart = () => {
        deleteShoppingCartFromBd(id)
    }

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p>This id: {id}</p>

            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
            <button onClick={() => deleteShoppingCart(id)}>Delete All</button>
        </div>
    );
};

export default Cosmitic;