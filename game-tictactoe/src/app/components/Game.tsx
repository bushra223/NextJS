import React, { useState } from "react";
import Board from "./board";

function Game() {
  // history = [
  //   [null, "X", null, null, "O", null, null, null, null], // First move
  //   [null, "X", null, null, "O", null, null, "X", null], // Second move
  //   ["O", "X", null, null, "O", null, null, "X", null], // Third move
  // ];
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }
  // squares: This is the current element being processed in the array. In this case, squares represents the current state of the game board.
  // move: This is the index of the current element being processed in the array. In this case, move represents the move number (starting from 0).

  const moves = history.map(
    (squares, move) => {
      let description;
      if (move > 0)
        //meaning it is 1st or second turn
        description = "Go to move # " + move;
      //meaning it is 0th turn
      else description = "Go to game start";
      // Keys tell React about the identity of each component, which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.Moves will never be re-ordered, deleted, or inserted in the middle, so it’s safe to use the move index as a key.
      return (
        <li key={move}>
          <button
            onClick={() => jumpTo(move)}
            className="bg-blue-950 rounded-lg p-1 text-xs text-white"
          >
            {description}
          </button>
        </li>
      );
    } //end of call back func
  ); //end of map

  return (
    <>
      <div
        className="     
        lg:w-80 lg:absolute lg:text-2xl  lg:px-10  lg:left-10 lg:text-right
        xl:w-96    xl:text-right xl:absolute xl:left-20
        md:static md:order-first md:text-center md:left-20 md:text-4xl 
         max-sm:static max-sm:order-2 max-sm:text-center max-sm:py-3 max-sm:text-4xl"
      >
        <ol>{moves}</ol>
      </div>

      <div className=" flex flex-1 justify-center sm:1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 ">
        <div className="flex flex-col items-center mr-8 mt-6 text-white">
          <div className="mb-2" style={{ fontSize: "1vmax" }}>
            Player 1
          </div>
          <div className=" border-4 border-blue-500 rounded-lg p-2 text-4xl font-bold text-blue-500">
            X
          </div>
        </div>

        <div className="flex flex-col justify-start">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handleplay}
          />

          <button
            onClick={() => {
              setHistory([Array(9).fill(null)]);
              setCurrentMove(0);
            }}
            className=" mt-4 bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded text-white"
          >
            Reset
          </button>
        </div>

        <div
          className="flex flex-col items-center mt-6 ml-8"
          style={{ fontSize: "1vmax" }}
        >
          <h2 className="mb-2 text-white">Player 2</h2>
          <div className=" border-4 border-blue-500 rounded-lg p-2 text-4xl font-bold text-blue-500">
            O
          </div>
        </div>
      </div>
    </>
  );
  function handleplay(nextSquares: string[]) {
    //next squares array has current value of all the squares in board
    //on each click first the current state will be added to history

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    //then the history state will be updated
    setHistory(nextHistory);
    //current move will be set to the last index in the history
    setCurrentMove(nextHistory.length - 1);
  }
}

export default Game;
