import React, { useEffect, useState, useRef } from "react";
import "./roll.scss";
import logo from "./assets/sttark_label_logo.png";

const rollDimensions = {
  width: 110,
  //length: 150,
};

export const Roll = ({
  width = 12,
  length = 12,
  shape = 1,
  orientation,
  corners,
}) => {
  const getLabelCount = () => {
    // get possible label count
    const area = rollDimensions.width * 1.5;

    // dimensions
    let labelWidth;
    let labelLength;
    let labelCount;

    // width
    if (!width) {
      // if there is not width but there is a length make it a square by assigning it the value of the length
      if (labelLength && labelLength <= 12) {
        labelWidth = labelLength;
      } else {
        labelWidth = 120; // else let it be the default value
      }
    } else if (width <= 4) {
      // since both labels smallest size is 4, they will always be a square regardless of the dimensions. Make it a rectangle if the length is greater than the width
      if (length > width && length <= 4) {
        labelWidth = 30;
      } else {
        labelWidth = 40;
      }
    } else if (width >= 12) {
      labelWidth = 120;
    } else {
      labelWidth = width * 10;
    }

    // length
    if (!length) {
      // if there is not length but there is a width make it a square by assigning it the value of the width
      if (labelWidth) {
        labelLength = labelWidth;
      } else {
        labelLength = 170; // else let it be the default value
      }
    } else if (length <= 4) {
      // since both labels smallest size is 4, they will always be a square regardless of the dimensions. Make it a rectangle if the length is greater than the width
      if (length < width && width <= 4) {
        labelLength = 30;
      } else {
        labelLength = 40;
      }
    } else if (length >= 17) {
      labelLength = 170;
    } else {
      labelLength = length * 10;
    }

    // count
    if (!length) {
      if (labelLength <= 60) {
        labelCount = 3;
      } else {
        labelCount = 2;
      }
    } else if (length > 13) {
      labelCount = 1;
    } else if (length < 4) {
      labelCount = 3;
    } else {
      labelCount = Math.ceil(area / (length * 10));
    }

    return { count: labelCount, width: labelWidth, length: labelLength };
  };

  console.log(getLabelCount());

  let labelCount = getLabelCount().count;
  let labelWidth = getLabelCount().width;
  let labelLength = getLabelCount().length;

  // label orientation
  let labelOrientation;

  switch (orientation) {
    case 1:
      labelOrientation = "labelFlow1";
      break;
    case 2:
      labelOrientation = "labelFlow2";
      break;
    case 3:
      labelOrientation = "labelFlow3";
      break;
    case 4:
      labelOrientation = "labelFlow4";
      break;
    default:
      labelOrientation = "labelFlow3";
  }

  // label shape
  let labelShape;
  switch (shape) {
    case 1:
      labelShape = "square";
      break;
    case 2:
      labelShape = "round";
      break;
    case 3:
      labelShape = "custom";
      break;
    case 4:
      labelShape = "previous";
      break;
    default:
      labelShape = "square";
  }

  return (
    <div className='component-wrapper'>
      <div
        className='roll'
        style={{ height: `${labelWidth}px`, width: rollDimensions.width }}
      >
        <div className='roll_thickness'>
          <div className='thickness_core'></div>
        </div>
        <div className='cylinder'>
          <div className='roll_length'>
            <div
              className='label-wrapper'
              style={{
                width: `${rollDimensions.length * 2 * 0.9}px`,
              }}
            >
              {[...Array(labelCount)].map((_, i) => (
                <>
                  {shape === 1 && (
                    <div
                      key={i}
                      className={`label ${labelShape}`}
                      style={{
                        width: `${labelLength - labelLength * 0.15}px`,
                        height: `${labelWidth - labelWidth * 0.15}px`,
                      }}
                    >
                      <div className={`label-design ${labelOrientation}`}></div>
                    </div>
                  )}
                  {shape === 2 && (
                    <div className={`${labelShape}`} key={i}></div>
                  )}
                </>
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
          onChange={(e) => setOr(parseInt(e.target.value))}
        />
        <input
          type='number'
          placeholder='shape'
          onChange={(e) => setShape(parseInt(e.target.value))}
        />
      </div>
      <Roll width={width} length={length} orientation={or} shape={shape} />
    </>
  );
};
