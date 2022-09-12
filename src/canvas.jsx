import "./App.css";
import { useState, useEffect } from "react";

export const Canvas = () => {
  const [labelsCount, setlabelsCount] = useState(4);
  const [rollWidth] = useState(17.5);
  const [rollHeight] = useState(20);
  const [rollDimmensions, setrollDimmensions] = useState({
    width: rollWidth / 2,
    height: rollHeight / 2,
  });

  const changeWidht = (e) => {
    const currentValue = e.target.value;
    const percentage = (currentValue / 12) * rollWidth;
    setrollDimmensions({ ...rollDimmensions, width: percentage });
  };

  const changeHeight = (e) => {
    const currentValue = e.target.value;
    const percentage = (currentValue / 12) * rollWidth;

    //get the total area of the roll
    const rollArea = rollHeight * rollWidth;

    // get the total area the label
    const labelArea = parseFloat(rollDimmensions.width) * currentValue;

    // get the total area taken by the amount of labels
    const currentAreataken = labelsCount * labelArea;

    // get the total available area
    const availableArea = rollArea / currentAreataken;

    const addLabels = Math.floor(rollArea / labelArea);

    const isNumber = Number.isFinite(addLabels);
    isNumber && setlabelsCount(addLabels);
    // console.log("width", parseFloat(rollDimmensions.width));
    // console.log("height", parseFloat(rollDimmensions.height));

    setrollDimmensions({ ...rollDimmensions, height: percentage });
  };

  const validateInput = (e) => {
    if (!(e.code.includes("Digit") || e.code.includes("Backspace"))) {
      console.log(!e.code.includes("Digit") || !e.code.includes("Backspace"));
      e.preventDefault();
    }
  };

  function calculateLabelCount() {}

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
              }}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </main>
  );
};
