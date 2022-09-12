import "./App.css";
import { useState, useEffect } from "react";
import { useRef } from "react";

export const Canvas = () => {
  const [labelsCount, setlabelsCount] = useState(4);
  const [art, setArt] = useState("");
  const [rollWidth] = useState(17.5);
  const [rollHeight] = useState(20);
  const [orientation, setorientation] = useState(0);
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
      console.log(!e.code.includes("Digit") || !e.code.includes("Backspace"));
      e.preventDefault();
    }
  };

  const changeArt = ({ target }) => {
    console.log(target.files);

    const blob = URL.createObjectURL(target.files[0]);
    setArt(blob);
  };

  const handleOrientation = ({ target }) => (
    console.log(target.value), setorientation(parseInt(target.value))
  );

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
    <main>
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
      <div className='roll'>
        {/*left side part of the roll*/}
        <div className='roll_thickness'>
          <div className='thickness_radius'></div>
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
      </div>
    </main>
  );
};
