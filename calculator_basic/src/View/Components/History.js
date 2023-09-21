

export function History(props) {
    var values = props.values;
    var start = values.length - 10;
    if (start < 0) {
        start = 0
    }
    values = values.slice(start, values.length)
    return (
        <div className="history-column">
            {values.map(
                value =>
                    <p className="history-item">
                        {value}
                    </p>
            )
            }
        </div >
    )
}