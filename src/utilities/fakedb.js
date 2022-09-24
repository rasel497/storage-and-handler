// use local storage to manage cart data, add, remove, update
const addToDb = id => {
    let shoppingCart = {};

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
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

export { addToDb }