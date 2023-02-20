import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { PreviewRoll2 } from "./revisions/two/preview_roll";
import { PreviewRoll } from "./revisions/one/preview_roll";
import "./index.css";

const App = () => {
  const [width, setWidth] = useState();
  const [length, setLength] = useState();
  const [orientation, setOrientation] = useState();
  const [shape, setShape] = useState();
  const [squaredCorners, setsquaredCorners] = useState(true);
  return (
    <React.Fragment>
      <div className='inputs'>
        <input
          type='text'
          placeholder='width'
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
        <input
          type='text'
          placeholder='length'
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
        <input
          type='number'
          placeholder='orientation'
          onChange={(e) => setOrientation(parseFloat(e.target.value))}
        />
        <input
          type='number'
          placeholder='shape'
          onChange={(e) => setShape(parseFloat(e.target.value))}
        />
        {!squaredCorners && (
          <button onClick={() => setsquaredCorners(true)}>squared</button>
        )}
        {squaredCorners && (
          <button onClick={() => setsquaredCorners(false)}>round</button>
        )}
      </div>

      <div className='main-wrapper'>
        <PreviewRoll orientation={orientation} width={width} />
        <PreviewRoll2
          width={width}
          length={length}
          orientation={orientation}
          shape={shape}
          squaredCorners={squaredCorners}
        />
      </div>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
