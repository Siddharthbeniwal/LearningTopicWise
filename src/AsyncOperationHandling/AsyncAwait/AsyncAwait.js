import React from "react";

function AsyncAwait() {

    // async/await ==>

    // async/await is a feature in JavaScript that simplifies the handling of asynchronous operations.
    // It provides a more readable and synchronous-like syntax for working with promises. The async keyword is used to
    // define a function as asynchronous, and the await keyword is used within that function to wait for the resolution
    // of a promise.

    // async Function:-
    // The 'async' keyword is used to declare a function as asynchronous.
    // The word 'async' before a function means one simple thing: a function always returns a promise.
    // Other values are wrapped in a resolved promise automatically.
    // (The keyword 'async' before a function makes the function return a promise)
    // An async function always returns a promise.



    // await Keyword:-
    // The 'await' keyword makes the function pause the execution and wait for a resolved promise before it continues.
    // The await keyword is used inside an async function to pause the execution of the function until the promise is resolved or rejected.
    // It can only be used inside an async function.
    // The await keyword can only be used inside an async function.



    // To summarize:
    // async and await make promises easier to write.
    // ASYNC makes a function RETURN A PROMISE
    // AWAIT makes a function WAIT FOR A PROMISE


    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P1 Success')
            // reject('P1 Fail')
        }, 8000)
    })

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('P2 Success')
            // reject('P2 Fail')
        }, 3000)
    })



    //handling async operation using async/await
    async function handlePromise1() {
        console.log('handlePromise1 starts');


        // JS engine will wait here for the promise to settle
        const val1 = await p1
        // At this line, javaScript will suspend the execution of 'handlePromise1' method until p1 is settled. For this, javaScript
        // will remove 'handlePromise1' from the callstack so that the callstack gets unblockd and the whole program is not
        // blocked bcoz of this. This means that the next lines in this method will not get executed till p1 is settled and 'handlePromise1'
        // execution is resumed. (Bcoz JavaScript is a synchronous single threaded language and it only has one callstack)        

        // In the meantime JS will start executing next part of the program and behind the scenes it will be keeping track for pending
        // promises, pending function executions and all

        // Once p1 is resolved, 'handlePromise1' method will again come into the callstack and JS will resume its execution
        // from where it left.

        // NOTE- If there are more than one promises in an async function then all the promises call will start at the same time.
        // This means that if p1 takes 5 sec and p2 takes 10 sec then both the promise will start at the same time and the method execution
        // will not have to wait for 10 sec more at 2nd await, it will have to wait only 5s 

        // & if p1 takes 10 sec and p2 takes 5 sec then the method execution will not have to wait for 5 sec more at the 2nd await. By the
        // time JS will reach 2nd await, p2 would have already settled. 

        console.log('val1', val1);
        console.log('this line will be executed after p1 is settled');

        const val2 = await p2
        console.log('val2', val2);
        console.log('this line will be executed after p2 is settled');
        console.log('handlePromise1 ends');
    }



    //handling async operation using promise
    function handlePromise2() {
        console.log('handlePromise2 starts');


        // JS engine will NOT wait here for the promise to settle
        p1
            .then((res) => {
                console.log('this line will be executed after p1 is settled');
            })
            .catch((err) => {
                console.log(err);
            })

        // Unlike aync/await, JS will not wait here for p1 to settle. It will continue executing next lines in the method.
        // Once the promise is settled, JS will execute .then method.

        console.log('handlePromise2 ends');
    }


    // handlePromise1();
    // handlePromise2();

    return (
        <h2>Learning Async/Await</h2>
    )
}

export default AsyncAwait;
