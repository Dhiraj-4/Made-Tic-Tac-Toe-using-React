import { useState } from "react";
import Card from "../Card/Card";


function Grid({ numbersOfCards }) {
    const [board, setBoard] = useState(Array(numbersOfCards).fill(''));
    const [turn, setTurn] = useState(true);// true => O, false => X;
    return (
        <div>
            <div className="text-3xl mb-5">Current Turn: {(turn) ? 'O' : 'X'}</div>
            <div className="flex flex-wrap w-[380px] gap-2">
                {board.map((element, idx) => <Card key={idx}/>)}
            </div>
        </div>
        
    )
}

export default Grid;