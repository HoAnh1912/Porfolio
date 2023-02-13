import React from "react";
import { useContext } from "react";
import useMousePosition from "..";
import { MouseContext } from "../context/MouseContextProvider";
import { MainCursor } from "../styled";

const Cursor = () => {
  const { cursorType } = useContext(MouseContext);

  const { x, y } = useMousePosition();

  return (
    <MainCursor>
      {/* <div
        className={`ring ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div> */}
      <div
        className={`dot ${cursorType}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
    </MainCursor>
  );
};

export default Cursor;
