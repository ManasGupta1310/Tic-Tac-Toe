import Button from "./Button";

const Board = ({squares, onClick}) => {
  return (
    <div className="board">
        {squares.map((square, i) => (
			    <Button key={i} value={square} onClick={() => onClick(i)} />
		    ))}
    </div>
  )
}

export default Board
