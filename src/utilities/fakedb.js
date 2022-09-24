// use local storage to manage cart data, add, remove, update
const addToDb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        console.log('alreday exists');
        // for added multiple item
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity)
    }
    else {
        console.log('new item added')
        localStorage.setItem(id, 1);
    }

    // localStorage.setItem(id, 1); // initial check
}

export { addToDb }