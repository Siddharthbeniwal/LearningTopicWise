// Handling Callback Hell using Promise ==>

// **********************************************************************************************************************************************

import React from "react";

function CallbackHellPromise() {

    const cart = ['Shirt', 'Jeans', 'Shoes']


    // consider these fns as APIs or external services
    function showSuccessMsg() {
        console.log('Order placed successfully');
    }

    function processPayment(orderId) {
        return new Promise((resolve) => {
            console.log('Processing payment for order id ', orderId);
            resolve(orderId);
        });
    }

    function showOrderSummary(orderId) {
        return new Promise((resolve) => {
            console.log('Order Summary for order id ', orderId);
            resolve(orderId);
        });
    }

    function proceedToPay(orderId) {
        return new Promise((resolve) => {
            console.log('Proceed to Pay for Order id ', orderId);
            resolve(orderId);
        });
    }

    // Handling callback hell using promise
    function createOrder(cart, proceedToPay) {
        console.log('Creating order for ', cart);
        //Promise chaining
        proceedToPay('123')
            .then((orderId) => showOrderSummary(orderId)) // proceedToPay will return a promise and once a promise is returned
            .then((orderId) => processPayment(orderId))   // it will execute our callback functions
            .then(() => showSuccessMsg())
            .catch((error) => console.error('Error:', error));
    }

    // NOTE: Actually createOrder will be returning a promise and we would be attaching aour callback functions to it.
    // But for simplicity createOrder method is written directly. Callback hell handling using Promises is explained better
    // in PromiseChain.js


    createOrder(cart, proceedToPay);


    return (
        <p>Welcome to <s>Hell</s> Callback Hell using promise</p>
    )
}

export default CallbackHellPromise;