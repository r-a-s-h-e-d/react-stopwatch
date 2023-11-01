import Digit from './Digit'

const Countdown = ({ min, sec, mil }) => {
    return (
        <div className="digit-container">
            <Digit color="paleGreen" time={ min } />
            <Digit color="skyBlue" time={ sec }  />
            <Digit color="salmon" time={ mil }  />
        </div>
    )
}

export default Countdown
