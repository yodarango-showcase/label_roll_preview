import React, { useEffect, useState, useRef } from "react";
import "./roll.scss";
import logo from "./assets/sttark_label_logo.png";

// initial roll dimensions
const rollDimensions = {
    width: 100,
    height: 200,
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
      60deg,
      #ffffff ${50 + width * 0.06}%,
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
    },
  },
  {
    roll,
    roll: { rollThickness },
    roll: { rollLength },
    roll: { cylinder },
  } = styles;

console.log(roll);

export const Roll = () => {
  return (
    <div className='component-wrapper'>
      <div className='roll' style={roll}>
        <div className='roll_thickness' style={rollThickness}>
          <div className='thickness_core'></div>
        </div>
        <div className='cylinder' style={cylinder}>
          <div className='roll_length' style={rollLength}></div>
        </div>
      </div>
    </div>
  );
};
