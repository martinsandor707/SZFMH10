import './App.css';
import { Calculator } from './Components/Calculator'
import { Controller } from './Controller/Controller';
import "./style/style.css"

function App() {
  return (
    <div className='app'>
      <Calculator state={{ title: '', history: [] }} controller={new Controller()}>

      </Calculator>
    </div >
  );
}

export default App;
