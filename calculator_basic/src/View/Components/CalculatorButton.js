export function CalculatorButton(props) {
    return (
        <button className="calculator-button" onClick={() => { props.onClick(props.key) }}>{props.title}</button>
    )
}