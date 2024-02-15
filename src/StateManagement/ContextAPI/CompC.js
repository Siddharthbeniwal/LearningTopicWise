import React from 'react'
import { FirstName, LastName } from './CompA'

//Context API ==>

//Context API consumer when more than one data
function CompC() {
  return (
    // the Consumer part expects a function inside it so it is necessary to write our return statement as callback function
    <>
    <FirstName.Consumer>
        {(firstName) => {
            return (
              <LastName.Consumer>
                {(lastName) => {
                  return (
                    <div>This is {firstName} {lastName} in comp C using Context API</div>
                    )
                  }
                }
                </LastName.Consumer>
            )
        }}
    </FirstName.Consumer>
    </>
  )
}

export default CompC

//In Context API approach, consumer parts gets more complex when more data is required to be passed,
//hence we have useContext to make the consumer part of context API easy to maintain 





//Context API consumer when only one data

// function CompC() {
//   return (
//     <>
//     <FirstName.Consumer>
//         {(name) => {
//             return (
//                 <div>This is {name} in comp C</div>
                
//             )
//         }}
//     </FirstName.Consumer>
//     </>
//   )
// }

// export default CompC


// ___________________________________________________________________________________________

// Passing data to CompC by props drilling -->

// function CompC({name}) {
//   return (
//     <div>This is {name} CompC</div>
//   )
// }

// export default CompC
