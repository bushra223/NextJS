"use client";

import Game from "./components/Game";

export default function Home() {
  return (
    <>
      <div
        className="h-screen flex flex-col "
        style={{
          background: "linear-gradient(135deg, #1a002b, #001f54, #660000)",
        }}
      >
        {/* <!-- Top section --> */}
        <div className="flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold mt-10 mb-10">
            Tic Tac Toe
          </h1>
        </div>

        {/* main flex  */}
        <div className="flex flex-1 p-6">
          <Game />
        </div>
      </div>
    </>
  );
}
