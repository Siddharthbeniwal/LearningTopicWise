// callback ==>

// a callback refers to a function that is passed as an argument to another function.
// The function that receives the callback can then execute it at some point in its execution.
// This is often used in asynchronous programming.

// **********************************************************************************************************************************************


import React from "react";

function Callback() {

    const cart = ['Shirt', 'Jeans', 'Shoes']

    function createOrder(cart, proceedToPay) {
        console.log('creating Order');
        proceedToPay('123');
    }

    createOrder(cart, function proceedToPay(orderId) {
        console.log('proceedToPay order id ', orderId);
    });

    // Here we have passed proceedToPay as a callback to createOrder function.
    // Now it is the responsibility of createOrder function to create a order first of all and then call our
    // callback function back once the order is created.


    // Problem with this approach ==>

    // We are relying on createOrder function to execute our code. This createOrder can be written in some other services,
    // or by other developers, or it can bugs and therefore we should not blindly give our code's control to it. 

    // If we have to use multiple callbacks, it will create a callback hell which would be difficult to read and maintain. 


    // These problem can be resolved by Promises.

    return (
        <p>Learning Callback</p>
    )
}

export default Callback;
