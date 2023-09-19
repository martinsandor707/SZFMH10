

export function History(props) {
    var values = props.values;
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