import React, { useEffect, useState, useRef } from "react";
import "./roll.scss";
import logo from "./assets/sttark_label_logo.png";

const PreviewRoll = ({ labelDirection = 3, art, length, width }) => {
  // ref
  const rollLength = useRef();

  // state
  const [labelLength, setlabelLength] = useState();
  const [labelCount, setLabelCount] = useState();

  art = art ? art : logo;

  let labelFlow;

  switch (labelDirection) {
    case 1:
      labelFlow = "labelFlow1";
      break;
    case 2:
      labelFlow = "labelFlow2";
      break;
    case 3:
      labelFlow = "labelFlow3";
      break;
    case 4:
      labelFlow = "labelFlow4";
      break;
  }

  const calculateWidth = () => {
    if (width >= 3 && width <= 12) {
      return width * ((11 / 12) * 10);
    }
    return 110;
  };

  const calculateLength = () => {
    const availableLength = rollLength.current.getBoundingClientRect();
    console.log("calculation fn");

    if (length >= 3 && length <= 17) {
      const labelCount = availableLength.width / (length * 10);
      setLabelCount(Math.ceil(labelCount));
      setlabelLength(length * 10);
      console.log("first");
    } else {
      const labelCount = availableLength.width / 30;
      setLabelCount(Math.ceil(labelCount));
      setlabelLength(100);
      console.log("first");
    }
  };

  useEffect(() => {
    calculateLength();
    calculateWidth();
  }, [length, width]);

  return (
    <div className='roll-wrapper'>
      <div className='roll' style={{ height: `${calculateWidth()}px` }}>
        {/*left side part of the roll*/}
        <div className='roll_thickness'>
          <div className='thickness_core'></div>
        </div>

        {/*the width of the roll: the cylinder tha runs horizontally*/}
        <div className='roll_width--wrapper'>
          <div className='roll_width'>
            <div className='width_top-border'></div>
            <div className='width_top-border border_thin'></div>
            <div className='width_label-wrapper'>
              <div className='label-wrapper_label-wrapper'>
                <div
                  className={`label-wrapper_label ${labelFlow}`}
                  style={{
                    backgroundImage: `url(${art})`,
                  }}
                ></div>
              </div>
              <div className='label-wrapper_label-wrapper'>
                <div
                  className={`label-wrapper_label ${labelFlow}`}
                  style={{
                    backgroundImage: `url(${art})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/*The length of the roll: the sheet that runs horizontally */}
        <div className='roll_length' ref={rollLength}>
          {[...Array(labelCount)].map((_, i) => (
            <div
              className='length_label-wrapper'
              key={i}
              style={{ width: `${labelLength}px` }}
            >
              <div
                className={`length_label ${labelFlow}`}
                style={{
                  backgroundImage: `url(${art})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Roll = () => {
  const [length, setlength] = useState();
  const [width, setwidth] = useState();

  return (
    <>
      <div className='inputs'>
        <input
          type='text'
          placeholder='lenght'
          onChange={(e) => setlength(e.target.value)}
        />
        <span> </span>
        <input
          type='text'
          placeholder='width'
          onChange={(e) => setwidth(e.target.value)}
        />
      </div>
      <div className='component-wrapper '>
        <PreviewRoll length={length} width={width} />
      </div>
    </>
  );
};
