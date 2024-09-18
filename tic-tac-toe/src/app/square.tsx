import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Square({ value, onSquareClick }) {
  return (
    // <button
    //   className="bg-blue-500 hover:opacity-50 text-lime-200 font-bold py-2 rounded min-w-[60px] min-h-[60px] text-4xl relative"
    //   onClick={onSquareClick}
    // >
    //   {value}
    //   <div className=" top-0 left-0 border-b-4 min-w-[60px] min-h-[60px] border-yellow-500 transform -rotate-45 origin-top-right"></div>
    // </button>
    <button
      className="bg-blue-500 hover:opacity-50 text-lime-200 font-bold py-2 rounded min-w-[60px] min-h-[60px] text-4xl relative"
      onClick={onSquareClick}
      style={{ position: "relative" }}
    >
      {value}
      <div
        className="absolute top-0 left-0 border-b-4 min-w-[60px] min-h-[60px] border-yellow-500 transform -rotate-45 origin-top-right"
        style={{
          zIndex: 1,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
    </button>
  );
}

export default Square;
