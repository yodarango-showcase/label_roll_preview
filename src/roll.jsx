// default dimensions -  roll | core
// x: 130 | 38
// y: 32  | 12

import "./roll.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

export const Roll = () => {
  const [labelsCount, setlabelsCount] = useState(4);
  const [art, setArt] = useState("");
  const [rollWidth] = useState(17.5);
  const [rollHeight] = useState(20);
  const [rollCore] = useState(6);
  const [rollOD] = useState(20);
  const [rollDimInInches, setrollDimInInches] = useState({
    width: 12,
    core: 3,
  });
  //const [orientation, setorientation] = useState(0);
  const [rollDimmensions, setrollDimmensions] = useState({
    width: rollWidth / 2,
    height: rollHeight / 2,
  });

  // ref
  const imageInput = useRef(null);

  const changeWidht = ({ target }) => {
    const currentValue = target.value;

    const percentage = (currentValue / 12) * rollWidth;

    setrollDimmensions({ ...rollDimmensions, width: percentage });

    calculateLabelCount(currentValue, rollDimmensions.height);
  };

  const changeHeight = ({ target }) => {
    const currentValue = target.value;

    const percentage = (currentValue / 12) * rollWidth;

    setrollDimmensions({ ...rollDimmensions, height: percentage });

    calculateLabelCount(rollDimmensions.width, currentValue);
  };

  const validateInput = (e) => {
    if (
      !(
        e.code.includes("Digit") ||
        e.code.includes("Backspace") ||
        e.code.includes("Period")
      )
    ) {
      e.preventDefault();
    }
  };

  const changeArt = ({ target }) => {
    const blob = URL.createObjectURL(target.files[0]);
    setArt(blob);
  };

  function calculateLabelCount(width, height) {
    //get the total area of the roll
    const rollArea = rollHeight * rollWidth;

    // get the total area the label
    const labelArea = parseFloat(width) * parseFloat(height);

    // add labels based on the available area
    const addLabels = Math.floor(rollArea / labelArea);

    const isNumber = Number.isFinite(addLabels);
    isNumber && setlabelsCount(addLabels);
  }

  return (
    <main className='component-wrapper'>
      <div className='inputs'>
        <input
          className='width'
          placeholder='width'
          onKeyDown={validateInput}
          onChange={changeWidht}
          inputMode='numeric'
        />
        <input
          className='length'
          placeholder='height'
          onChange={changeHeight}
          onKeyDown={validateInput}
          inputMode='numeric'
        />
        <input
          className='input-image'
          type='file'
          id='label'
          name='label'
          accept='image/png, image/jpeg'
          onChange={changeArt}
          ref={imageInput}
        />
        <button
          onClick={() => imageInput.current.click()}
          className='upload-btn'
        >
          Upload Art
        </button>
      </div>

      {/* roll starts */}
      <div className='roll' style={{ height: `${rollOD}rem` }}>
        {/*left side part of the roll*/}
        <div className='roll_thickness'>
          <div
            className='thickness_core'
            style={{
              height: `${rollCore}rem`,
            }}
          ></div>
        </div>

        {/*the width of the roll: the cylinder tha runs vertically*/}
        <div className='roll_width--wrapper'>
          <div className='roll_width'></div>
        </div>

        {/*The lenght of the roll: the sheet that runs vertcally */}
        <div className='roll_length'>
          {[...Array(labelsCount)].map((_, i) => (
            <div
              className='length_label'
              style={{
                width: `${rollDimmensions.width}rem`,
                height: `${rollDimmensions.height}rem`,
                backgroundImage: `url(${art})`,
              }}
              key={i}
            ></div>
          ))}
        </div>

        {/* dimmensions start */}
        <div
          className='roll-dimmension-inches roll-dimmension-inches--core'
          style={{
            height: `${rollCore}rem`,
            top: `${rollOD / 2 - rollCore / 2}rem`,
          }}
        >
          <span></span>
          <p>C: {rollDimInInches.core}"</p>
        </div>
        <div
          className='roll-dimmension-inches roll-dimmension-inches--width'
          style={{
            width: `${rollWidth}rem`,
          }}
        >
          <span></span>
          <p>W: {rollDimInInches.width}"</p>
        </div>
      </div>
    </main>
  );
};
