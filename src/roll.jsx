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
                      <div
                        className='design'
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1429552077091-836152271555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80)",
                        }}
                      ></div>
                    </div>
                    <svg>
                      <defs>
                        <clipPath id='svgPath'>
                          <path
                            d='M1 105.613V2C1 2 10.6344 9.83743 23.7097 12.3613C45.7312 16.6122 65 15.8151 65 15.8151L63.6237 139C63.6237 139 35.4086 134.159 23.7097 127.487C8.56989 118.853 1 105.613 1 105.613Z'
                            stroke='#FA665D'
                          />
                          {/*              <path
                            d='M1 93.5126
                            V2
                            C 1 2 8.52688 8.92211 18.7419 11.1513
                            C 35.9462 14.9056 51 14.2017 51 14.2017
                            L 49.9247 123
                            C 49.9247 123 27.8817 118.725 18.7419 112.832
                            C 6.91398 105.206 1 93.5126 1 93.5126
                            Z'
                            stroke='#FA665D'
                      />*/}
                        </clipPath>
                      </defs>
                    </svg>
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
