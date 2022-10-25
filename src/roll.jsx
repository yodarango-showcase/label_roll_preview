import React, { useEffect, useState, useRef } from "react";
import "./roll.scss";
import logo from "./assets/sttark_label_logo.png";

// initial roll dimensions
const rollDimensions = {
    width: 110,
    height: 110,
    thickness: 30,
  },
  { width, height, thickness } = rollDimensions;

const styles = {
    roll: {
      width: `${width}px`,
      height: `${height}px`,

      cylinder: {
        borderBottomLeftRadius: `${width * 0.6}px ${height * 0.3}px `,
        backgroundImage: `linear-gradient(
      90deg,
      #ffffff 50%,
      #C6C3C1 50%
    )`,
      },

      rollThickness: {
        height: `${thickness + width * 0.05}px`,
        top: `-${(thickness + width * 0.05) / 2}px`,
        boxShadow: `0px ${height * 0.02}px #c6c3c1`,
      },

      rollLength: {
        top: `${(thickness + width * 0.05) / 2 + height * 0.02}px`,
        height: `${height - (thickness + width * 0.05) / 2 - height * 0.02}px`,
        width: `${width * 2}px`,
        borderBottomLeftRadius: `${width * 0.6}px ${height * 0.3}px`,
      },

      label: {
        height: "80%",
        //width: `${width / 3.2}%`, // decimal accounts for margin
      },
    },
  },
  {
    roll,
    roll: { rollThickness },
    roll: { rollLength },
    roll: { cylinder },
    roll: { label },
  } = styles;

export const Roll = ({ labelWidth, labelLength }) => {
  let width = labelWidth >= 4 ? `${labelWidth * 10}px` : "110px";
  let length =
    labelLength <= 2
      ? `9.5%`
      : labelLength > 2
      ? `${100 / Math.ceil((rollDimensions.width * 2) / (labelLength * 10))}%`
      : "31%";

  return (
    <div className='component-wrapper'>
      <div className='roll' style={{ ...roll, height: width }}>
        <div className='roll_thickness' style={rollThickness}>
          <div className='thickness_core'></div>
        </div>
        <div className='cylinder' style={cylinder}>
          <div className='roll_length' style={rollLength}>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className='label'
                style={{ ...label, width: length }}
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
          placeholder='height'
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <Roll labelWidth={width} labelLength={length} />
    </>
  );
};
