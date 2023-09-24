import React from "react";
import {Calculator} from "../View/Components/Calculator";
import {Controller} from "../Controller/Controller";

const Protected = () => {
    return (<div className='app'>
        <Calculator state={{ title: '', history: [] }} controller={new Controller()}>

        </Calculator>
    </div >);

    // return <div>Protected</div>;
};

export default Protected;