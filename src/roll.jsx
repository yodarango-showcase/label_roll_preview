import React, { useEffect, useState, useRef } from "react";
import "./roll.scss";
import logo from "./assets/sttark_label_logo.png";
import { getDimensions } from "./helpers/get_dimensions";
import { getShape } from "./helpers/get_shape";

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
  // get dimensions
  const { labelWidth, labelLength, labelCount } = getDimensions(
    width,
    length,
    rollDimensions.width
  );

  // get shape
  const labelShape = getShape(shape);

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
                <div
                  key={i}
                  className={`label ${labelShape}`}
                  style={{
                    width: `${labelLength - labelLength * 0.15}px`,
                    height: `${labelWidth - labelWidth * 0.15}px`,
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
