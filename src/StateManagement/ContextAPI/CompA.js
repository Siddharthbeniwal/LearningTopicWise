import React, { createContext, useContext } from 'react'
import CompB from './CompB'

const FirstName = createContext(); // We can consider and use this created context as a component
const LastName = createContext();

function CompA() {
  return (
    <FirstName.Provider value={'Hello'}>
      <LastName.Provider value={'World'}>
        <CompB />
      </LastName.Provider>
    </FirstName.Provider>
  )
}

export default CompA
export { FirstName, LastName } // There can be only one default export in a file, all other exports must be passed as objects (inside {})


// Passing data to CompC by props drilling -->


// function CompA() {
//   return (
//     <CompB name={'Context API'}/>
//   )
// }

// export default CompA

// ______________________________________________________________________________________________________________________________________________


//Context API ==>

// The Context API is a part of the React library and provides a way to share values, such as state or functions, between
// components without having to pass the data through props at every level of the component tree. It is particularly useful
// when you have data that needs to be accessed by many components at different levels of the hierarchy.

// The Context API is often used for scenarios where you have global state that multiple components need to access or modify.
// It helps avoid prop-drilling, making the code cleaner and more maintainable. However, it's generally recommended for simpler
// state management scenarios. For complex state management, tools like Redux are commonly used.

// It has three parts:
// Context
// Provider
// Consumer


// ______________________________________________________________________________________________________________________________________________

// Here are some common situations where the Context API can be beneficial:

// 1. Avoiding Prop Drilling:
// Prop drilling, also known as prop passing, occurs when you need to pass down data from a component to its child components through props,
// even if the intermediate components do not use that data themselves. It can lead to less maintainable and readable code, especially in
// deep component hierarchies.
// In a deeply nested component tree, passing data through props at each level can lead to prop drilling, making the code less readable
// and maintainable. Context API helps alleviate this issue by providing a way to access shared values without passing them down through
// every intermediate component.

// 2. Global State Management:
// When you have global state that needs to be accessed or modified by multiple components across the application, the Context API can be
// used to manage and share this state efficiently.

// 3. Theme Switching:
// Changing the theme of an application is a common use case for the Context API. The theme information can be stored in a context, and
// components at different levels of the hierarchy can dynamically adjust their styles based on the theme without the need for prop passing.

// 4. Authentication Status:
// Storing and managing authentication status is another use case. The authentication state can be stored in a context, and components like
// headers or navigation bars can use this information to conditionally render content based on whether the user is authenticated.

// 5. Language Preferences:
// In multilingual applications, the user's language preference can be stored in a context. Components that need to display content in a
// specific language can access this context to determine how to render text.

// 6. Configurable Settings:
// Storing configurable settings or preferences that need to be accessed by different parts of the application.
