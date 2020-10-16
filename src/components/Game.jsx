import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import Square from "./Square";
import Restart from "./RestartButton";
import GameStatus from "./GameStatus"

function Game () {
    
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const nextSymbol = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
      
    function getStatus() {
        if (winner) {
          return "Winner: " + winner;
        } else if (isBoardFull(squares)) {
          return "Draw!";
        } else {
          return "Next player: " + (nextSymbol);
        }
      }
    function renderSquare(i){
        return (
            <Square 
                value={squares[i]}
                onClick={() => {
                    if (squares[i] != null || winner != null) {
                        return;
                    }
                    const nextSquares = squares.slice();
                    nextSquares[i] = nextSymbol;;
                    setSquares(nextSquares);
                    setXIsNext(!xIsNext)
                }}
            />
        );
    }

    function renderRestartButton () {
        return (
            <Restart 
                variant={winner? "contained": "text"}
                onClick={() =>{
                    setSquares(Array(9).fill(null));
                    setXIsNext(true);
                }}
            />
        )
    }    
    return (
        <Container  align="center">
            <div className="game">
                <div className="game-board">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <GameStatus getStatus={getStatus}/>
                <div className="restart-button">{renderRestartButton()}</div>
            </div>
        </Container>
    )
    

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    function isBoardFull(squares) {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i] == null) {
                return false;
            }
        }
        return true;
    }
  
}

  export default Game;