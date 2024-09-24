"use client";

import Game from "./components/Game";

export default function Home() {
  return (
    <>
      <div
        className="fixed w-screen h-screen flex flex-col overflow-auto" //w-screen mean 100vw ,h-screen means 100vh
        //1 rem = 16px
        //vmax and vmin
        style={{
          background: "linear-gradient(135deg, #1a002b, #001f54, #660000)",
        }}
      >
        {/* <div className=" flex flex-col items-center justify-center"> */}
        {/* <!-- Top section --> */}

        <div className="text-rose-800 px-16 py-4 font-bold text-center mb-4 max-sm:text-3xl md:text-4xl lg:text-5xl ">
          Tic Tac Toe
        </div>

        {/* main flex  */}
        <div className=" flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row ">
          <Game />
        </div>
      </div>
    </>
  );
}
