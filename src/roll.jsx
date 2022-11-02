import { useState } from "react";
import "./roll.scss";
import { getDimensions } from "./helpers/get_dimensions";
import { getOrientation, getShape } from "./helpers/get_options";
import { getSvgMask } from "./helpers/getSvgMask";

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

  // get the corresponding svg mask
  const SVGMask = getSvgMask(width, length);

  console.log(SVGMask);

  return (
    <div className='component-wrapper'>
      <div
        className={`roll`}
        style={{ height: `${labelWidth}px`, width: rollDimensions.width }}
      >
        <div className={`roll_thickness ${labelWidth <= 40 && "min-width"}`}>
          <div className='thickness_core'></div>
        </div>
        <div className='cylinder'>
          <div
            className={`roll_length ${labelWidth <= 40 && "min-width"}`}
            style={{ width: rollDimensions.length }}
          >
            <div className={`label-wrapper`}>
              {labelCount.map((label, i) =>
                label.isCurved ? (
                  <div
                    key={i}
                    className={`label ${labelShape} ${
                      squaredCorners ? "squared-corners" : ""
                    } ${label.isCurved && "label-is-curved"}`}
                    style={{
                      ...SVGMask.addStyles,
                      width: `${SVGMask.width}px`,
                      height: `${labelWidth}px`,
                    }}
                  >
                    <div className={`design-curved`}>
                      <div
                        className='design'
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1615457938971-3ab61c1c0d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)",
                        }}
                      ></div>
                    </div>
                    <svg>
                      <clipPath id='svgPath'>
                        <path d={SVGMask.path} stroke='#FA665D' />
                      </clipPath>
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
          onChange={(e) => setLength(parseInt(e.target.value))}
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
