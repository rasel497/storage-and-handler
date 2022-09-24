const add = (first, second) => {
    return first + second;
}

// export default add;
const multiple = (first, second) => {
    return first * second;
}

// get total price
const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}


export {
    add,
    multiple,
    getTotalPrice as getTotal
} // as means ami getTotal price ke short kore getTotal lekhlm