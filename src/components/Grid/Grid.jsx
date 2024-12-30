import { useState } from "react";
import Card from "../Card/Card";
import isWinner from "../../helpers/checkWinner";

function Grid({ numbersOfCards }) {
    const [board, setBoard] = useState(Array(numbersOfCards).fill(''));
    const [turn, setTurn] = useState(true);// true => O, false => X;
    const [winner, setWinner] = useState(null);

    function play(index) {
        if(board[index] != "") return;
        if(turn == true) {
            board[index] = 'O';
        } else {
            board[index] = 'X';
        }

        const win = isWinner(board, turn ? "O" : "X");
        if(win) {
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    function reset() {
        setBoard(Array(numbersOfCards).fill(''));
        setTurn(true);
        setWinner(null);
    }
    return (
        <div>
            {
                winner && (
                    <>
                    <h1 className="text-3xl">Winner is {winner}</h1>
                    <button onClick={reset}
                    className="px-4 py-2 bg-blue-500 text-lg"
                    >Reset Game</button>
                    </>
                )
            }
            <div className="text-3xl mb-5">Current Turn: {(turn) ? 'O' : 'X'}</div>
            <div className="flex flex-wrap w-[380px] gap-2">
                {board.map((el, idx) => <Card gameEnd={winner ? true : false} key={idx} onPlay={play} player={el} index={idx}/>)}
            </div>
        </div>
        
    )
}

export default Grid;