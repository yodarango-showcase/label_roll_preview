import { useState } from "react";
import "./roll.scss";
import { getDimensions } from "./helpers/get_dimensions";
import { getOrientation, getShape } from "./helpers/get_options";

const rollDimensions = {
  width: 160,
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
    rollDimensions.length
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
            <div className={`label-wrapper`}>
              {labelCount.map((label, i) =>
                label.isCurved ? (
                  <div
                    key={i}
                    className={`label ${labelShape} ${
                      squaredCorners ? "squared-corners" : ""
                    } ${label.isCurved && "label-is-curved"}`}
                    style={{
                      width: `${labelLength}px`,
                      height: `${labelWidth}px`,
                    }}
                  >
                    <div className={`design-curved`}>
                      {/*<svg
                        viewBox='0 0 800 800'
                        version='1.1'
                        style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'
                      >
                        <path d='M33.21,470.785C33.21,470.785 39,505.07 65.196,521.392C91.936,538.054 124.845,548.652 176.048,554.759C216.765,559.616 300.061,554.453 300.061,554.453C300.061,554.453 308.055,596.842 292.88,602.409C267.836,611.598 194.387,622.146 149.794,609.583C105.201,597.02 44.753,550.164 25.323,527.031C13.146,512.535 33.21,470.785 33.21,470.785Z' />
                  </svg>*/}
                      <div
                        className='design'
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1667330102328-c9a08a73373a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
                        }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`label ${labelShape} ${
                      squaredCorners ? "squared-corners" : ""
                    } ${label.isCurved && "label-is-curved"}`}
                    style={{
                      width: `${labelLength}px`,
                      height: `${labelWidth}px`,
                    }}
                  >
                    <div className={`label-design`}>
                      <div className={`orientation ${labelOrientation}`}></div>
                    </div>
                  </div>
                )
              )}
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
