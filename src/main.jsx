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
				<input type='text' placeholder='width' onChange={(e) => setWidth(parseInt(e.target.value))} />
				<input type='text' placeholder='length' onChange={(e) => setLength(parseInt(e.target.value))} />
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
				{!squaredCorners && <button onClick={() => setsquaredCorners(true)}>Squared corners</button>}
				{squaredCorners && <button onClick={() => setsquaredCorners(false)}>Round corners</button>}
			</div>

			{/*<div className='main-wrapper'>
        <PreviewRoll orientation={orientation} width={width} />

        <PreviewRoll3
          width={width}
          length={length}
          orientation={orientation}
          shape={shape}
          squaredCorners={squaredCorners}
        />
        <PreviewRoll2
          width={width}
          length={length}
          orientation={orientation}
          shape={shape}
          squaredCorners={squaredCorners}
        />*
        
        </div>*/}
			<PreviewRoll4 width={width} length={length} orientation={orientation} shape={shape} squaredCorners={squaredCorners} />
			{/*<div className='desc-wrapper'>
        <div>
          <h1 className='version-title'>Version 1</h1>
          <p className='version-description'>
            Responsive to roll size from 4" to 12" and label orientation. When
            sized down in a vertical orientation the curved label does not
            rotate to the proper angle but this is is a minor change
          </p>
        </div>
        <div>
          <h1 className='version-title'>Version 2</h1>
          <p className='version-description'>
            Second most responsive roll. Responds to corner format, label shape,
            orientation, label width from 4" - 12", label height from 3" - 17"
            and it extrapolates the necessary amount of labels to fill the roll.
            labels.
          </p>
        </div>
        <div>
          <h1 className='version-title'>Version 3</h1>
          <p className='version-description'>
            By far the most responsive of all. Responds to corner format, label
            shape, orientation, label width, label height and it extrapolates
            the necessary amount of labels to fill the roll. However, the
            algorithm that calculated the curvature is not smart enough to make
            perfectly round labels.
          </p>
        </div>
        <div>
          <h1 className='version-title'>Version 4</h1>
          <p className='version-description'>
            This is the newest design of the roll to implement. Since making the
            curved labels would be a bigger task, this option was provided as a
            possible option. The Goal for this design is to give the same
            flexibility as the version 3 or 2 rolls
          </p>
        </div>
        </div>*/}
		</React.Fragment>
	);
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
