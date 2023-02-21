import "./index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { PreviewRoll2 } from "./revisions/two/preview_roll";
import { PreviewRoll } from "./revisions/one/preview_roll";
import { PreviewRoll3 } from "./revisions/three/preview_roll";
import { PreviewRoll4 } from "./revisions/four/roll_preview";

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
        <select onChange={(e) => setOrientation(parseFloat(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>

        <select onChange={(e) => setShape(parseFloat(e.target.value))}>
          <option value={1}>Square/ rectangle</option>
          <option value={2}>Round / oval </option>
          <option value={3}>custom</option>
          <option value={1}>previous</option>
        </select>
        {!squaredCorners && (
          <button onClick={() => setsquaredCorners(true)}>
            Squared corners
          </button>
        )}
        {squaredCorners && (
          <button onClick={() => setsquaredCorners(false)}>
            Round corners
          </button>
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
        <PreviewRoll3
          width={width}
          length={length}
          orientation={orientation}
          shape={shape}
          squaredCorners={squaredCorners}
        />
        <PreviewRoll4 />
      </div>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
