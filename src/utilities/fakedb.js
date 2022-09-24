// use local storage to manage cart data, add, remove, update
//01- addToDb
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        // default Ei line na dile hy cz, 3no line defalut dewa ase.
        shoppingCart = {};
    }

    //add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        // for buy multiple item
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    // localStorage.setItem(id, 1); // initial check
}

//02- remove from db storage ja amra appilication dekhi
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

// optional amii chaile pura shopping cart taii delete kore dite pari
const deleteShoppingCartFromBd = () => {
    localStorage.removeItem('shopping-cart');
}


export { addToDb, removeFromDb, deleteShoppingCartFromBd }