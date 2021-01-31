import React, {useState} from "react";
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import ClickTarget from "./ClickTarget";

const Game = () => {
    const [reactionTimeHistory, setReactionTimeHistory] = useState<number[]>([])
    const [isGameStarted, setIsGameStarted] = useState(false);

    const handleOnClick = (reactionTimeMs: number) => {
        setReactionTimeHistory([...reactionTimeHistory, reactionTimeMs])
        setIsGameStarted(false);
    }

    return <div>
        <button
            disabled={isGameStarted}
            onClick={() => setIsGameStarted(true)}>
            Start Game
        </button>
        {isGameStarted && <ClickTarget onClick={handleOnClick} />}

        <h3>Response time history</h3>
        <LineChart width={800} height={300} data={reactionTimeHistory.map((ms, index) => ({name: index, reactionTime: ms}) )}>
            <YAxis />
            <XAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="reactionTime" stroke="#8884d8" />
        </LineChart>
    </div>
}

export default Game;