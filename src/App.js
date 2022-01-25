import Board from "./components/Board.js";
import Header from "./components/Header.js";
import Line from "./components/Line.js";
import { useState } from "react";
import Button from "./components/Button.js";

export function calculateWinner(squares) {
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

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [x, setX] = useState(0);
  const winner = calculateWinner(board);
  
  
  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = x ? "X" : "O";
    setBoard(boardCopy);
    setX(!x);
  };

  return (
    <div className="App">
      <Header/>
      <Line/>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p>
          {winner ? "Winner: " + winner : "Next Player: " + (x ? "X" : "O")}
        </p>
      </div>
        <div className="box">
          <button onClick={ () => {
            setBoard(Array(9).fill(null));
            setX(0);
          }}
          className='reset'>Reset</button>
        </div>
      </div>
  );
}

export default App;
