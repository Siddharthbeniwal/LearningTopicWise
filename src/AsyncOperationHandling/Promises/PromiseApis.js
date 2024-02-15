// source- https://www.w3docs.com/learn-javascript/promise-api.html

import React from "react"

function PromiseApis() {
    // ________________________________________________________________________________________________________________________________

    // Let us consider below p1, p2, p3 promises are the promises that we need to handle:

    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P1 Success')
            // reject('P1 Fail')
        }, 1000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P2 Success')
            // reject('P2 Fail')
        }, 2000)
    })


    const p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P3 Success')
            // reject('P3 Fail')
        }, 5000)
    })



    // ________________________________________________________________________________________________________________________________
    // The Promise class provides a set of methods and conventions for working with promises.

    // 1. Promise.all ==>

    // is used when it is necessary to execute many promises at the same time and wait until all of them are ready.

    // For example, you intend to download several URLs in parallel, processing the content when all of them are done.

    // Syntax:

    // let promise = Promise.all([...promises...]);

    // It grabs an array of promises and returns a new promise.
    // The new promise resolves at the time all the listed promises are settled. The array of their results becomes the result of it.



    // Promise.all([p1, p2, p3])
    //     .then((res) => {
    //         console.log('Promise.all res', res);
    //     })
    //     .catch((err) => {
    //         console.log('Promise.all err', err);
    //     })

    // Here, p1, p2, p3 will be called simultaneously but it will print the p1, p2, p3 resolve msgs
    // only after 'all' promises are settled and that too in the same sequence.

    // it will wait for 'all' promises to settle even if other promises are settled.

    // In this case, it will print after 5 sec (5 sec is the time taken by p3 which is highest among all)

    // If any of promise is rejected then it will not wait for other promises' fulfillment or rejection, it will instantly print
    // the error thrown by that rejected promise.


    // ________________________________________________________________________________________________________________________________
    // 2. Promise.allSettled ==>

    // The Promise.allSettled method is used for returning a promise, which resolves after all of the given promises
    // have resolved or rejected, along with an array of objects that each describe each promise’s outcome.


    // Promise.allSettled([p1, p2, p3])
    //     .then((res) => {
    //         console.log('Promise.allSettled res', res);
    //     })
    //     .catch((err) => {
    //         console.log('Promise.allSettled err', err);
    //     })

    // It will wait for 'all' promises to get 'settled', whether it is fulfilled or rejected
    // After all promises are settled, it will collect all the results and give it to you.

    // It returns an object- 
    //    if promise is fulfilled it gives value
    //    if promise is rejected it gives reason(error)

    // 0 : { status: 'rejected', reason: 'P1' }
    // 1 : { status: 'fulfilled', value: 'P2' }
    // 2 : { status: 'rejected', reason: 'P3' }


    // ________________________________________________________________________________________________________________________________
    // 3. Promise.race ==>

    // Promise.race is similar to Promise.all. The difference is that it waits only for the initial promise settled
    // and then gets either the result or the error of it.

    // the result will be the FIRST SETTLED PROMISE, whether it is FULFILLED OR REJECTED.

    // if two or more promises are taking same time then it will consider the promise which is written first (on top) 


    // Promise.race([p1, p2, p3])
    //     .then((res) => {
    //         console.log('Promise.race res', res);
    //     })
    //     .catch((err) => {
    //         console.log('Promise.race err', err);
    //     })



    // ________________________________________________________________________________________________________________________________
    // 4. Promise.any ==>

    // Promise.race is similar to Promise.all. The difference is that it waits only for the initial promise settled
    // and then gets either the result or the error of it.

    // the result will be the FIRST SETTLED 'FULFILLED' PROMISE.

    // NOTE- If no promise is fulfilled it will give AggregateError.
    
    // The AggregateError object represents an error when several errors need to be wrapped in a single error.
    // It is thrown when multiple errors need to be reported by an operation

    // Promise.any([p1, p2, p3])
    //     .then((res) => {
    //         console.log('Promise.any res', res);
    //     })
    //     .catch((err) => {
    //         console.log('Promise.any err', err); // AggregateError: All promises were rejected
    //         console.log('Promise.any err object', err.errors); // ['P1 Fail', 'P2 Fail', 'P3 Fail']
    //     })


    // ________________________________________________________________________________________________________________________________
    // 5. Promise.finally ==>

    // The finally() method is used to specify a function to be executed when the promise is settled,
    // whether it's fulfilled or rejected.

    // eg -

    // p1.then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     })
    //     .finally(() => {
    //         console.log('This will be always executed when promise is settled');
    //     });




    return (
        <h2>Learning Promise APIs</h2>
    )
}

export default PromiseApis
