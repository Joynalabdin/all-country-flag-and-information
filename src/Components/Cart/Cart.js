import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPopulation = cart.reduce((sum,country)=>sum +country.population,0)
    return (
        <div>
            <h5>This is a Cart: {cart.length}</h5>
            <h3>Total population :{totalPopulation} </h3>
        </div>
    );
};

export default Cart;