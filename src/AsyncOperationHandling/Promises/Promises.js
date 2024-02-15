// Promises ==>

// Promise is an object representing the eventual completion or failure of an asynchronous operation.
// It is a placeholder for the result of an asynchronous operation that may not be available yet.
// It is a way to handle asynchronous code in a more structured and readable manner.
// Use the then() method to hook up a callback that will be called when the result of the asynchronous operation is ready.

// A Promise has three states:
// Pending: The initial state. The Promise is neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully, and the Promise has a resulting value.
// Rejected: The operation failed, and the Promise has a reason for the failure.



//Syntax:

// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     // If successful, call resolve(result)
//     // If unsuccessful, call reject(error)
// });

// Here:
// The resolve function is used to fulfill the Promise, providing the result of the successful operation.
// The reject function is used to reject the Promise, providing an error or reason for the failure.
// Once a Promise is created, you can use the then method to handle the successful completion and the catch method to handle any errors:




// A Promise is executed by using the .then() method written after the declared promise.
// If we need to handle any error which is occurred then we use the .catch() method written after promise.
// We also use the .finally() method if we want to just print our result irrespective of any error that occurred
// during promise execution.


// myPromise
//     .then((result) => {
//         // Handle successful completion
//     })
//     .catch((error) => {
//         // Handle error
//     });

// **********************************************************************************************************************************************

// callback vs promise ==>

// In callback, we were passing our function to another function and
// in promise we are attaching a callback function to a promise object.

// In Callback we were giving the control of our function (proceedToPay) to another function (createOrder)
// and that function (createOrder) would have called it whenever it wants to.

// In promise we have control of our code with us.
// createOrder will only do its job, it will create order and it will fill the promise object
// with the data (order id) when it is completed executing.

// As soon as this promise Object is filled with data, it will automatically call our Callback function and we will
// have control of our code with us as we are not passing it to some other function.

// **********************************************************************************************************************************************

import React from "react";

function Promises() {

    const cart = ['Shirt', 'Jeans', 'Shoes']

    function createOrder(cart) {
        console.log('creating Order with: ', cart);

        return new Promise((resolve, reject) => {
            const orderId = Math.floor(Math.random() * 1000);
            resolve(orderId);
        });
    }

    function proceedToPay(orderId) {
        console.log('proceedToPay order id ', orderId)
    }


    const myPromise = createOrder(cart)


    myPromise.then(
        function (res) {
            proceedToPay(res)
        }
    ).catch(
        function (err) {
            console.log('error', err);
        }
    )

    return (
        <p>Learning Promises</p>
    )
}

export default Promises;
