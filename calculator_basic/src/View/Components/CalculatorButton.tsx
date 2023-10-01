import React from 'react';

interface CalculatorButtonProps {
    id?: string; // Optional id prop
    title: string;
    onClick: (key: any) => void; // Modify the type as per your requirement
    className?: string; // Optional className prop
    key?: number; // Optional key prop
}

function CalculatorButton(props: CalculatorButtonProps): React.JSX.Element {
    return (
        <button
            id={props.id} // Include the id prop here
            className={`calculator-button ${props.className || ''}`}
            onClick={() => props.onClick(props)}
        >
            {props.title}
        </button>
    );
}

export default CalculatorButton;
