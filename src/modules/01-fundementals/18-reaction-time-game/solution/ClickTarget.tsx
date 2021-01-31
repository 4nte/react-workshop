import React, {useEffect, useState} from "react";

function getRandomInt(max: number) {
    return Math.random() * Math.floor(max);
}

type Props = {
    onClick: (ms: number) => void
}
const ClickTarget = (props: Props) => {
    const [activationUnixTime, setActivationUnixTime] = useState(0);

    const handleClick = () => {
        if (activationUnixTime === 0) {
            return;
        }

        const reactionTime = new Date().getTime() - activationUnixTime;
        props.onClick(reactionTime)
    }

    useEffect(() => {
        setTimeout(() => {
            setActivationUnixTime(new Date().getTime())
        }, getRandomInt(10) * 1000)
    })

    return <div onClick={handleClick} style={{ margin: 20, padding: 100, textAlign: "center", border: "1px solid black", background: activationUnixTime ? "green" : 'black'}}>
        {activationUnixTime ? 'Click me!' : 'Wait for the green color.'}
    </div>

}

export default ClickTarget;