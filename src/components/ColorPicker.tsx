import React from "react";
import { Result } from "../Constants";

function ColorPicker(props: {
  colors: string[];
  order: number;
  onResult: (a: Result | undefined) => void;
}) {
  function handleClick(color: string) {
    if (color === props.colors[props.order]) {
      props.onResult(Result.Correct);
    } else {
      props.onResult(Result.Wrong);
    }
  }

  const Buttons = props.colors.map((color: string) => (
    <span key={color} onClick={() => handleClick(color)}>
      {color}
    </span>
  ));

  return <>{Buttons}</>;
}

export default ColorPicker;
