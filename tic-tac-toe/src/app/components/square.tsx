import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Square({
  value,
  onSquareClick,
  disableButton,
}: {
  value: string;
  onSquareClick: () => void;
  disableButton: boolean;
}) {
  return (
    <button
      className={`bg-blue-500 hover:opacity-50 text-lime-200 font-bold py-2 rounded min-w-[60px] min-h-[60px] text-4xl 
        ${disableButton ? "bg-gray-300 cursor-not-allowed" : ""}`}
      onClick={onSquareClick}
      disabled={disableButton}
    >
      {value}
    </button>
  );
}

export default Square;
