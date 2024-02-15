import React, { useContext } from 'react'
import { FirstName, LastName } from './CompA'

//useContext ==>

//In Context API approach, consumer parts gets more complex when more data is required to be passed,
//hence we have useContext to make the consumer part of context API easy to maintain.

// useContext is a hook in React that allows functional components to subscribe to a context without
// introducing nesting. It is a part of the React Context API, which provides a way to pass data through the
// component tree without having to pass props down manually at every level.


function CompD() {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return (
        <div>This is {fName} {lName} in comp D using useContext</div>
    )

}

export default CompD