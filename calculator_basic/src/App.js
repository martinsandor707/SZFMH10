import './App.css';
import { Calculator } from './View/Components/Calculator'
import { Controller } from './Controller/Controller';
import "./View/style/style.css"

function App() {
  return (
    <div className='app'>
      <Calculator state={{ title: '', history: [] }} controller={new Controller()}>

      </Calculator>
    </div >
  );
}

export default App;
