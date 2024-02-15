// Promise Chaining ==>
// It is a simple concept where we have a sequence of asynchronous tasks to be performed one after another 
// and we have to use data returned by one task to be used in next task for which wemay initialize another
// promise inside our .then() method and accordingly we may execute our results. The function inside then
// captures the value returned by the previous promise.

// Mainly promise chaining is used to chain multiple asynchronous task that has to be performed sequentially.
// Asynchronous task can be chained in a similar way to synchronous task. The only difference is that asynchronous
// tasks require promises.



// **********************************************************************************************************************************************

import React from "react";

function PromiseChain() {

    const cart = ['Shirt', 'Jeans', 'Shoes']

    createOrder(cart)
    .then(function (OrderId) {
        console.log('Order Created succeessfully with order id ', OrderId);
        return OrderId   // this is passed to next callback fn (proceedToPay)
    })
    .then(function (OrderId) {
        return proceedToPay(OrderId)    // promise returned by proceedToPay is passed on to next callback fn
    })
    .then(function(paymentMsg) {        // Here, paymentMsg is the promise which was returned by proceedToPay
        console.log(paymentMsg);
    })
    .catch(function(err) {              // this .catch will handle errors for all callbacks 
        console.log('Error', err);      // it will show whatever error was thrown by the rejected promise
    })

    // Here, we only have one .catch method which is at the end of the sequence, so this .catch method will handle
    // any error which could have occured due to rejection of any of the previous promises. So if any of the above promises
    // is rejected then any of the next callback fn will not be executed and error will be shown for whole chain.
    
    // For eg, promise for CreateOrder is rejected then it will directly go to .catch method and none of the .then method
    // will get executed.
    // Now suppose we want our next callback fns to be executed even if one promise is rejected, then we can do so by putting
    // .catch method after each callback.


    //Note- We can also use arrow function in .then and .catch

    function createOrder(cart) {
        const pr = new Promise(function (resolve, reject) {
            if (validateCart(cart)) {
                setTimeout(() => {
                    resolve('12345')
                }, 4000)
            } else {
                reject ('Cart is invalid')
            }
        })
        return pr;
    }

    function validateCart(cart) {
        // Logic for validating cart
        return true;
    }

    function proceedToPay(OrderId) {
        return new Promise (function (resolve, reject) {
            // Logic for payment
            resolve('Payment Successful')
        })
    }


    return (
        <h2>Learning Promise chaining</h2>
    )
}

export default PromiseChain;
