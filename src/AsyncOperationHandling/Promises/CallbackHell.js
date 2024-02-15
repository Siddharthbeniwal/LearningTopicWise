// Callback Hell ==>

// Callback hell, also known as the "pyramid of doom," occurs when multiple nested callbacks are used in asynchronous JavaScript code,
// leading to code that is hard to read, understand, and maintain. This pattern often arises in scenarios where asynchronous operations
// are nested inside each other, such as with callbacks, promises, or asynchronous functions.

// **********************************************************************************************************************************************

import React from "react";

function CallbackHell() {

    const cart = ['Shirt', 'Jeans', 'Shoes']


    // consider these fns as APIs or external services
    function showSuccessMsg() {
        console.log('Order placed successfully');
    }

    function processPayment(orderId, showSuccessMsg) {
        console.log('Processing payment for order id ', orderId);
        showSuccessMsg();
    }

    function showOrderSummary(orderId) {
        console.log('Order Summary for order id ', orderId);
        processPayment(orderId, showSuccessMsg);
    }

    function proceedToPay(orderId, showOrderSummary) {
        console.log('Proceed to Pay for Order id ', orderId);
        showOrderSummary(orderId);
    }

    function createOrder(cart, proceedToPay) {
        console.log('Creating Order for ', cart);
        proceedToPay('123', showOrderSummary);
    }



    //callback hell ==>

    createOrder(cart, function (orderId) {
        proceedToPay(orderId, function () {
            showOrderSummary(orderId, function () {
                processPayment(orderId, function () {
                    showSuccessMsg();
                })
            })
        })
    })

    return (
        <p>Welcome to <s>Hell</s> Callback Hell</p>
    )
}

export default CallbackHell;