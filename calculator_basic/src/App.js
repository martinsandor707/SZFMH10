import './App.css';
import Calculator from './View/Components/Calculator'
import { Controller } from './Controller/Controller';
import "./View/style/style.css"

import Public from "./Components/Public";
import Protected from "./Components/Protected";

import useAuth from "./Hooks/useAuth";
import React from "react";

function App() {

    const isLogin= useAuth();

    console.log(isLogin);

    // return <Public />;

    return isLogin ? <Protected /> : <Public />;

    // return (<div className='app'>
    //     <Calculator state={{title: '', history: []}} controller={new Controller()}>
    //
    //     </Calculator>
    // </div>);
}

export default App;
