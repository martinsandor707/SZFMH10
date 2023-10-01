import React from 'react';

interface HistoryProps {
    values: string[];
}

function History(props: HistoryProps) : React.JSX.Element {
    const values : string[] = props.values;
    let start : number = values.length - 10;
    if (start < 0) {
        start = 0;
    }
    const slicedValues : string[] = values.slice(start);

    return (
        <div className="history-column">
            {slicedValues.map((value : string, index : number) => (
                <p key={index} className="history-item">
                    {value}
                </p>
            ))}
        </div>
    );
}

export default History;