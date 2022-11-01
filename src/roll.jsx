import { useState } from "react";
import "./roll.scss";
import { getDimensions } from "./helpers/get_dimensions";
import { getShape } from "./helpers/get_shape";
import { getOrientation } from "./helpers/get_orientation";

const rollDimensions = {
  width: 110,
  length: 340,
};

export const Roll = ({
  width = 12,
  length = 12,
  shape = 1,
  orientation = 3,
  squaredCorners = false,
}) => {
  // get dimensions
  const { labelWidth, labelLength, labelCount } = getDimensions(
    width,
    length,
    rollDimensions.width
  );

  // get shape
  const labelShape = getShape(shape);

  // label orientation
  let labelOrientation = getOrientation(orientation);

  return (
    <div className='component-wrapper'>
      <div
        className='roll'
        style={{ height: `${labelWidth}px`, width: rollDimensions.width }}
      >
        <div className={`roll_thickness ${labelWidth <= 40 && "min-width"}`}>
          <div className='thickness_core'></div>
        </div>
        <div className='cylinder'>
          <div className='roll_length' style={{ width: rollDimensions.length }}>
            <div className='label-wrapper'>
              {[...Array(labelCount)].map((_, i) => (
                <div
                  key={i}
                  className={`label ${labelShape} ${
                    squaredCorners ? "squared-corners" : ""
                  }`}
                  style={{
                    width: `${labelLength}px`,
                    height: `${labelWidth}px`,
                  }}
                >
                  <div className={`label-design`}>
                    <div className={`orientation ${labelOrientation}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RollPreview = () => {
  const [width, setWidth] = useState();
  const [length, setLength] = useState();
  const [or, setOr] = useState();
  const [shape, setShape] = useState();
  const [squaredCorners, setsquaredCorners] = useState(true);

  return (
    <>
      <div className='inputs'>
        <input
          type='text'
          placeholder='width'
          onChange={(e) => setWidth(parseInt(e.target.value))}
        />
        <input
          type='text'
          placeholder='length'
          onChange={(e) => setLength(e.target.value)}
        />
        <input
          type='number'
          placeholder='orientation'
          onChange={(e) => setOr(parseFloat(e.target.value))}
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
      <Roll
        width={width}
        length={length}
        orientation={or}
        shape={shape}
        squaredCorners={squaredCorners}
      />
    </>
  );
};
