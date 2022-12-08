import React, { useState } from "react";
import ColorPicker from "./ColorPicker";
import Alerts from "./Alerts";
import { Result, Init } from "../Constants";

function App() {
  const [colors, setColors] = useState(Init.getColors());
  const [order, setOrder] = useState(Init.getOrder());
  const [result, setResult] = useState<Result | undefined>(Init.result);

  function handleNext() {
    setColors(Init.getColors());
    setOrder(Init.getOrder());
    setResult(Init.result);
  }

  return (
    <div className="container">
      <div
        className="color-box"
        style={{ backgroundColor: colors[order] }}
      ></div>
      <div className="buttons">
        <ColorPicker colors={colors} order={order} onResult={setResult} />
      </div>
      <div className="info">
        <Alerts result={result} />
      </div>
      <div className="footer" onClick={handleNext}>
        NEXT
      </div>
    </div>
  );
}

export default App;
