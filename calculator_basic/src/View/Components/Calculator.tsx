import React, { useState } from 'react';
import CalculatorButton from "./CalculatorButton"
import { Keys } from "../../Model/Keys"
import History from "./History"

interface CalculatorProps {
    controller: any; // Replace 'any' with the actual type of 'controller'
    state: any; // Replace 'any' with the actual type of 'state'
}

function Calculator(props: CalculatorProps) : React.JSX.Element {
    const { controller, state } = props;
    console.log(props);
    const [currentState, setCurrentState] = useState(state);
    const onClick = (key: number) : void => {
        console.log(key);
        if (key <= 9) {
            setCurrentState(controller.handleNumberClick(currentState, key));
        }
        else {
            setCurrentState(controller.handleOperatorClick(currentState, key));
        }
    };
    return (
        <table>
            <tbody>
            <tr>
                <td colSpan={4} className='calculator-display'>
                    <p>
                        {state.title}
                    </p>
                </td>
                <td rowSpan={6}>
                    <History values={state.history}></History>
                </td>
            </tr>
            <tr>
                <td>
                    <CalculatorButton className="number" title="7" key={Keys.Seven} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="number" title="8" key={Keys.Eight} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="number" title="9" key={Keys.Nine} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="operator" title="+" key={Keys.Plus} onClick={onClick}/>
                </td>
            </tr>
            <tr>
                <td>
                    <CalculatorButton className="number" title="4" key={Keys.Four} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="number" title="5" key={Keys.Four} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="number" title="6" key={Keys.Six} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="operator" title="-" key={Keys.Minus} onClick={onClick}/>
                </td>
            </tr>
            <tr>
                <td>
                    <CalculatorButton className="number" title="1" key={Keys.One} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="number" title="2" key={Keys.Two} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="number" title="3" key={Keys.Three} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="operator" title="*" key={Keys.Multipliy} onClick={onClick}/>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <CalculatorButton id="equals" className="operator" title="=" key={Keys.One} onClick={onClick}/>
                </td>
                <td>
                    <CalculatorButton className="opreator" title="/" key={Keys.Multipliy} onClick={onClick}/>
                </td>
            </tr>
            </tbody>
        </table >
    );
}

export default Calculator;