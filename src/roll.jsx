import { useState, useRef, useEffect } from "react";
import "./roll.scss";
import { getDimensions } from "./helpers/get_dimensions";
import { getOrientation, getShape } from "./helpers/get_options";
import { getSvgMask, getSVGRotation } from "./helpers/getSvgMask";

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
  const [rollLength, setRollLength] = useState(null);
  let rollLengthDOMEL = useRef(null);

  // get dimensions
  const { labelWidth, labelLength, labels } = getDimensions(
    width,
    length,
    rollLength
  );

  // get shape
  const labelShape = getShape(shape);

  // label orientation
  let labelOrientation = getOrientation(orientation);

  // get the corresponding svg mask
  const SVGMask = getSvgMask(width, length);

  // get the svg rotation
  const SVGMaskTransfrom = getSVGRotation(orientation);
  //console.log(SVGMask);
  //console.log(labels);
  let orientationSVG =
    orientation === 1
      ? 90
      : orientation === 2
      ? 180
      : orientation === 3
      ? 0
      : 270;

  let skewSVG =
    orientation === 1
      ? 20
      : orientation === 2
      ? 180
      : orientation === 3
      ? 20
      : 270;
  useEffect(() => {
    const rollL = rollLengthDOMEL.current.getBoundingClientRect();
    setRollLength(rollL.width);
  }, []);

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
            ref={rollLengthDOMEL}
            id='roll_length'
            className={`roll_length ${labelWidth <= 40 && "min-width"}`}
            style={{ minWidth: rollDimensions.length }}
          >
            <div className={`label-wrapper`}>
              {labels.map((label, i) =>
                label.isCurved ? (
                  <div
                    key={i}
                    className={`label label-is-curved ${labelShape} ${
                      squaredCorners ? "squared-corners" : ""
                    }`}
                    style={{
                      ...SVGMask.addStyles[i],
                      height: `${labelWidth}px`,
                    }}
                  >
                    <div className={`design-curved`}>
                      <div
                        className={`design ${
                          orientation === 1 || orientation === 2
                            ? "vertical"
                            : "horizontal"
                        }`}
                        style={{
                          clipPath: `url(#svgPath${i})`,
                        }}
                      >
                        <div
                          style={{
                            transform: `
                            rotateZ(${orientationSVG}deg) skewY(${
                              skewSVG - i * 5
                            }deg)`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <svg>
                      <clipPath id={`svgPath${i}`}>
                        <path d={SVGMask.path[i]} stroke='#FA665D' />
                      </clipPath>
                    </svg>
                  </div>
                ) : (
                  <div
                    key={i}
                    className={`label ${labelShape} ${
                      squaredCorners ? "squared-corners" : ""
                    }`}
                    style={{
                      ...label.addStyles,
                      width: `${labelLength}px`,
                      height: `${labelWidth}px`,
                    }}
                  >
                    <div className={`label-design`}>
                      <div
                        className={`orientation ${labelOrientation} orientation-${labelShape}`}
                      ></div>
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
