// default dimensions -  roll | core
// x: 130 | 38
// y: 32  | 12

import "./roll.scss";
import { useState, useEffect } from "react";
import { useRef } from "react";

export const Roll = () => {
  const [art, setArt] = useState("");
  const [rollWidth] = useState(17.5);
  const [rollHeight] = useState(20);
  const [rollCore] = useState(6);
  const [rollOD] = useState(20);

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
        {/*<input
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
        </button>*/}
      </div>

      {/* roll starts */}
      <div
        className='roll'
        style={{ height: `${rollOD}rem`, backgroundColor: "#73bcff" }}
      >
        {/*left side part of the roll*/}
        <div className='roll_thickness'>
          <div
            className='thickness_core'
            style={{
              width: `${rollCore}rem`,
            }}
          ></div>
        </div>

        {/*the width of the roll: the cylinder tha runs horizontally*/}
        <div className='roll_width--wrapper'>
          <div className='roll_width'>
            <div className='width_top-border'></div>
            <div className='width_label-wrapper'>
              <div
                className='label-wrapper_label'
                style={{
                  backgroundImage: `url(${art})`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/*The length of the roll: the sheet that runs horizontally */}
        <div className='roll_length'>
          {[...Array(3)].map((_, i) => (
            <div
              className='length_label'
              style={{
                backgroundImage: `url(${art})`,
              }}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};
