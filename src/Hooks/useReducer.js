import React, { useState, useReducer } from 'react'
import '../App.css'


// //Making counter using useState

// function UseReducer() {
//     const [count, setCount] = useState(0);

//     return (
//         <>
//             <h1>Learning useReducer using Counter</h1>

//             <div className='counter-btn-container'>
//                 <button className='counter-btn' onClick={() => {setCount(count-1)}}>-</button>
//                 {count}
//                 <button className='counter-btn' onClick={() => {setCount(count+1)}}>+</button>
//             </div>
//         </>
//     )
// }

// export default UseReducer



//_________________________________________________________________________________________________________________________________

// userReducer ==>

//Making counter using useReducer Hook

const initialState = 0;

const reducer = (state, action) => {
    if(action.type === 'INCREMENT') {
        return state+1
    }
    if(action.type === 'DECREMENT') {
        return state-1
    }
    return state;
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState); // initialState can also be given here directly

    return (
        <>
            <h1>Learning useReducer using Counter</h1>

            <div className='counter-btn-container'>
                <button className='counter-btn' onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
                {state}
                <button className='counter-btn' onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            </div>
        </>
    )
}

export default UseReducer




// userReducer ==>


// useReducer is a hook that is used for managing complex state logic in your components.
// It is an alternative to useState and is particularly useful when the next state depends on the previous state and the logic to 
// calculate the next state is more complex.

// The useReducer hook takes a reducer function and an initial state as arguments and returns the current state and a dispatch function.
// The reducer function is responsible for updating the state based on the dispatched actions.

// reducer is a function that takes the current state and an action, and returns the new state based on the action type.
// useReducer is called with the reducer function and the initialState, returning the current state (state) and a dispatch function.
// The component renders the current count and two buttons that dispatch actions to increment or decrement the count.
