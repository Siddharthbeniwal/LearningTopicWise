import React from "react";
import MainContextApiComp from "./ContextAPI/MainContextApiComp";
import MainRedux from './Redux/MainRedux'

function StateManagement() {
    return (
        <>
            <h1>Learning State Management</h1>
            {/* <MainContextApiComp/> */}
            <MainRedux />
        </>
    )
}

export default StateManagement;
