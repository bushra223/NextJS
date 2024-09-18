"use client";

import Board from "./components/board";

export default function Home() {
  return (
    //////////////////////////////////////////////////
    //main flex
    <div
      className="min-h-screen flex flex-col items-center justify-center "
      style={{
        background: "linear-gradient(135deg, #1a002b, #001f54, #660000)",
      }}
    >
      <h1 className="text-white text-5xl font-bold mb-8">Tic Tac Toe</h1>

      {/* main flex */}
      <div className="flex justify-around w-full mb-8 max-w-sm">
        <div className="flex flex-col items-center mt-5 mr-8">
          <h2 className="mb-2 ">Player 1</h2>
          <div className=" border-4 border-blue-500 rounded-lg p-2 text-4xl font-bold text-blue-500">
            X
          </div>
        </div>
        <Board />

        <div className="flex flex-col items-center mt-5 ml-8">
          <h2 className="mb-2">Player 2</h2>
          <div className=" border-4 border-blue-500 rounded-lg p-2 text-4xl font-bold text-blue-500">
            O
          </div>
        </div>
      </div>
    </div>
  );
}
