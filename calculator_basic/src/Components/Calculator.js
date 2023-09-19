import React, { useState } from 'react';
import { CalculatorButton } from "./CalculatorButton.js"
import { Keys } from "../Model/model.js"
import { History } from "./History.js"

export function Calculator(props) {
    var controller = props.controller
    const [state, setState] = useState(props.state)
    const onClick = (key) => { setState(controller.handleInput(state, key)) }
    return (
        <table>
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
                    <CalculatorButton title="7" key={Keys.Seven} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="8" key={Keys.Eight} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="9" key={Keys.Nine} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="+" key={Keys.Plus} onClick={onClick}></CalculatorButton>
                </td>
            </tr>
            <tr>
                <td>
                    <CalculatorButton title="4" key={Keys.Four} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="5" key={Keys.Four} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="6" key={Keys.Six} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="-" key={Keys.Minus} onClick={onClick}></CalculatorButton>
                </td>
            </tr>
            <tr>
                <td>
                    <CalculatorButton title="1" key={Keys.One} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="2" key={Keys.Two} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="3" key={Keys.Three} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="*" key={Keys.Multipliy} onClick={onClick}></CalculatorButton>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                    <CalculatorButton title="=" key={Keys.One} onClick={onClick}></CalculatorButton>
                </td>
                <td>
                    <CalculatorButton title="/" key={Keys.Multipliy} onClick={onClick}></CalculatorButton>
                </td>
            </tr>
        </table >
    )
}