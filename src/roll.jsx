import React, { useEffect, useState, useRef } from "react";
import "./roll.scss";
import logo from "./assets/sttark_label_logo.png";

const rollDimensions = {
  width: 110,
  length: 150,
};

export const Roll = ({ width, length }) => {
  // state
  //const [skew, setSkew] = useState("");

  let w;
  let labelCount;
  let labelWidth;
  let skew;

  if (!width) {
    w = rollDimensions.width;
    labelCount = 5;
  } else if (width <= 4) {
    w = 40;
    labelCount = 5;
  } else if (width >= 12) {
    w = rollDimensions.width;
    labelCount = 5;
  } else {
    w = width * 10;
  }

  if (!length) {
    // default values
    labelCount = 3;
    labelWidth = 30;
    skew = "skew1";
  } else if (length <= 4) {
    // set the max count of labels to 7 and assign the appropiate 14% width to cover area
    labelCount = 7;
    labelWidth = 14;

    skew = "skew2";
  } else if (length >= 12) {
    labelCount = 1;
    labelWidth = 99;
    skew = "skew4";
  } else {
    // get the total length area minus the left padding on the roll length divided by the length * 10 to match pixel dimension
    let lc = (rollDimensions.length * 2 - 7) / (length * 10);
    labelCount = Math.floor(lc);

    labelWidth = `${(rollDimensions.length * 2 - 10) / (lc * 0.75)}`;

    // check there are at least 3 labels otherwise the skew look odd
    if (labelCount >= 3) {
      skew = "skew3";
    } else {
      skew = "skew4";
    }
  }

  console.log(labelCount);
  return (
    <div className='component-wrapper'>
      <div
        className='roll'
        style={{ height: `${w}px`, width: rollDimensions.length }}
      >
        <div className='roll_thickness'>
          <div className='thickness_core'></div>
        </div>
        <div className='cylinder'>
          <div className='roll_length'>
            {[...Array(labelCount)].map((_, i) => (
              <div
                key={i}
                className={`label ${skew}`}
                style={{
                  width: `${labelWidth}%`,
                  transform: i <= skew[0] && skew[1],
                  marginLeft: i === 1 && skew[2],
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const RollPreview = () => {
  const [width, setWidth] = useState();
  const [length, setLength] = useState();

  return (
    <>
      <div className='inputs'>
        <input
          type='text'
          placeholder='width'
          onChange={(e) => setWidth(e.target.value)}
        />
        <input
          type='text'
          placeholder='length'
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <Roll width={width} length={length} />
    </>
  );
};
