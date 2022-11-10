import { useState, useRef, useEffect } from "react";
import "./roll.scss";
import { getDimensions } from "./helpers/get_dimensions";
import { getOrientation, getShape } from "./helpers/get_options";
import {
  getSvgMask,
  transformMask,
  transformRoundShape,
  transformCustomShape,
} from "./helpers/get_coordinates";

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
  const SVGMask = getSvgMask(width, length, squaredCorners);

  // transform the square mask on size adjustment
  const SVGMaskTransform = transformMask(width, length, orientation);

  // transform the circular shape on size adjustment
  const roundTransform = transformRoundShape(width, length, orientation);

  // transform the circular shape on size adjustment
  const customTransform = transformCustomShape(width, length, orientation);

  // decide whether is round or custom shape
  const customOrRound = shape === 2 ? roundTransform : customTransform;

  const noLables = labels.length === 0 || !labels || shape > 3;

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
            className={`roll_length ${labelWidth <= 40 && "min-width"} ${
              noLables ? "min-height" : ""
            }`}
            style={{ minWidth: rollDimensions.length }}
          >
            {shape > 3 && <div className='loading'>Loading...</div>}
            <div className={`label-wrapper`}>
              {shape >= 1 &&
                shape <= 3 &&
                labels.map((label, i) =>
                  label.isCurved && shape === 1 ? ( // squared shape
                    <div
                      key={i}
                      className={`label label-is-curved ${labelShape} ${
                        labelShape === 3 ? "round" : ""
                      } ${squaredCorners ? "squared-corners" : ""}`}
                      style={{
                        ...SVGMask.addStyles[i],
                        height: `${labelWidth}px`,
                      }}
                    >
                      <div className={`design-curved`}>
                        <div
                          className={`design orientation-${labelOrientation} ${SVGMask.image}`}
                          style={{
                            clipPath: `url(#svgPath${i})`,
                          }}
                        >
                          <div style={SVGMaskTransform[i]}></div>
                        </div>
                      </div>
                      <svg>
                        <clipPath id={`svgPath${i}`}>
                          <path d={SVGMask.path[i]} stroke='#FA665D' />
                        </clipPath>
                      </svg>
                    </div>
                  ) : label.isCurved && (shape === 2 || shape === 3) ? ( // round shape
                    <div
                      key={i}
                      className={`label label-is-curved round`}
                      style={{
                        width: `${labelLength}px`,
                        height: `${labelWidth}px`,
                        ...customOrRound.label[i],
                      }}
                    >
                      <div
                        className={`design design-curved ${
                          shape === 3 ? "custom" : ""
                        }`}
                        style={{
                          clipPath:
                            shape === 3 ? customOrRound.clipPath[i] : "none",
                          width: "100%",
                          height: "100%",
                          ...customOrRound.design[i],
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            ...customOrRound.orientation[i],
                          }}
                          className={`orientation ${labelOrientation} orientation-round orientation-${customOrRound.image}`}
                        ></div>
                      </div>
                    </div>
                  ) : // straight labels
                  shape === 1 ? ( // squared
                    <div
                      key={i}
                      className={`label ${labelShape} ${
                        labelWidth < 30 || labelLength < 30
                          ? "small-" + labelShape
                          : ""
                      } ${squaredCorners ? "squared-corners" : ""}`}
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
                  ) : (
                    // round
                    <div
                      key={i}
                      className={`label ${labelShape} ${
                        labelWidth < 30 || labelLength < 30
                          ? "small-" + labelShape
                          : ""
                      }`}
                      style={{
                        ...customOrRound.straightLabelStyles,
                        width: `${labelLength}px`,
                        height: `${labelWidth}px`,
                      }}
                    >
                      <div className={`label-design ${labelShape}`}>
                        <div
                          style={customOrRound.straightDesignStyles}
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
