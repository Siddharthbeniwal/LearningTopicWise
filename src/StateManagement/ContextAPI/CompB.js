import React from 'react'
import CompC from './CompC'  // for Context API
import CompD from './CompD'  // for useContext

function CompB() {
    return (
        <>
            <CompC />
            <CompD />
        </>
    )
}

export default CompB


// Passing data to CompC by props drilling -->

// function CompB({name}) {
//   return (
//     <CompC name={name}/>
//   )
// }

// export default CompB