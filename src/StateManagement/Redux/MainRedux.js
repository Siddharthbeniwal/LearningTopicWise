import React from "react";

function MainRedux() {

    return (
        <h2>Learning Redux</h2>
    )
}

export default MainRedux;

//======================================================================================================================================

// The similarities and the differences between the FLUX and Redux architecture are explained in the below table

// Features                              FLUX                                           Redux
//======================================================================================================================================

// Data Flow         Data flow is unidirectional                         Data flow is unidirectional

// Actions           The state can be only by triggered actions          The state can be only by triggered actions

// Single Store      Can have multiple stores. Stores contain            Has a single store. The store contains only the state,
//                   state as well as logic to change the state.         the logic to change the state is separated from the store


// Boilerplate       More boilerplate.                                   Setting up Redux requires less boilerplate than FLUX

// Server            Rendering for initial page load                     It is easy to achieve in Redux
//                   requires a lot of API’s and conventions

// State             State is mutable                                    The state is immutable which improves performance


// Time Travel       Tracking state by moving back and forth            Allows to step forward and backward through state changes
// Debugging         is very difficult                                  in your code and even replay interactions easily using
//                                                                      Redux dev tools browser extension.
