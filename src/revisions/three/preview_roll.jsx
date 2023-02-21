import "./preview_roll.scss";
import { React } from "react";
import { getDimensions } from "./helpers/get_dimensions";
import { getShape } from "./helpers/get_shape";
import { getOrientation } from "./helpers/get_orientation";

const rollDimensions = {
  width: 110,
  //length: 150,
};

export const PreviewRoll3 = ({
  width = 12,
  length = 12,
  shape = 1,
  orientation = 3,
  squaredCorners = false,
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
  let labelOrientation = getOrientation(orientation);

  return (
    <div className='roll-wrapper version-three'>
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
                  className={`label ${labelShape} ${
                    squaredCorners ? "squared-corners" : ""
                  }`}
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
