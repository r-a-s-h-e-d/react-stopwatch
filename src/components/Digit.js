const Digit = ({ color, time }) => {
    return (
        <div className="digit"  style={{ borderColor:color, color:color}} >
            <h3>{ time < 10 ? `0${time}` : time }</h3>
        </div>
    )
}

export default Digit
