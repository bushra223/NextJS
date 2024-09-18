"use client";
import React, { useEffect, useMemo, useState } from "react";
import Square from "./square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");

  function updateStatus() {
    const winner = calculateWinner();
    console.log("winner", winner);

    //const winner = useMemo(() => calculateWinner(), [squares]);
    if (winner === "X" || winner === "O") setStatus(`Winner: ${winner}`);
    else if (winner == null) setStatus(`Next player: ${xIsNext ? "X" : "O"}`);
    else if (winner === "Draw") setStatus("It's a Draw!");
  }

  function calculateWinner() {
    let isDraw = true; //assume it is a draw initially
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
      console.log(`squares[${a}] = ${squares[a]}`);
      console.log(`squares[${b}] = ${squares[b]}`);
      console.log(`squares[${c}] = ${squares[c]}`);

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
      if (squares[a] === null || squares[b] === null || squares[c] === null) {
        isDraw = false; // if any square is empty, it's not a draw
      }
    }
    console.log("isDraw: ", isDraw);
    // if (isDraw) {
    //   return "Draw"; // if no winner and all squares are filled, it's a draw
    // }

    // return null; // if no winner and not a draw, return null

    if (isDraw) {
      return "Draw"; // if no winner and all squares are filled, it's a draw
    } else {
      return null; // if no winner and not a draw, return null
    }
  }

  function handleClick(i) {
    //if there is already some value in the squares[i] then return dont let user mark it again
    //or if the winner has been announced then return on further clicks
    //
    if (
      calculateWinner() ||
      status.includes("Winner") ||
      status.includes("Draw")
    ) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext == true) nextSquares[i] = "X";
    else nextSquares[i] = "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  //updateStatus();
  //changes will be reflected upon next update or render so we have to use useeffect here

  // In React, when you update state using setState(), it doesn't update immediately. Instead, React batches (groups) multiple state updates together and updates the state asynchronously (after a short delay).

  // In React, when you update state using setState(), it doesn't update immediately. Instead, React batches (groups) multiple state updates together and updates the state asynchronously (after a short delay).
  // This means that when you click the button for the first time:
  // squares and xIsNext are updated, but not immediately.
  // The updateStatus() function is called, but it sees the old state values (before the update).
  // The state is updated asynchronously, so the changes aren't reflected until the next render.
  // That's why you saw the variables updating on the second click instead of the first click.
  // Think of it like sending a letter:
  // You write the letter (update state).
  // You put it in the mailbox (React batches the update).
  // The letter is delivered (asynchronously, after a delay).
  // The recipient reads the letter (your component sees the updated state).

  useEffect(() => {
    updateStatus();
  }, [squares, xIsNext]);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex gap-x-1 mb-1">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex gap-x-1 mb-1">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex gap-x-1">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div
          className={` mt-4 font-bold py-2 px-4  ${
            status.charAt(0) == "W"
              ? "animate-bounce text-green-400"
              : "text-white"
          }`}
        >
          {status}
        </div>
        <button
          onClick={() => {
            setSquares(Array(9).fill(null));
            setXIsNext(true);
            setStatus("");
          }}
          className="mt-4 bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded text-white"
        >
          Reset
        </button>
        {/* <button className="relative bg-blue-500 text-white px-4 py-2">
          Button Text
          <div className="absolute top-0 left-0 h-full w-full border-b-4 border-yellow-500 transform -rotate-45 origin-top-left"></div>
        </button> */}
      </div>
    </>
  );
}

export default Board;
