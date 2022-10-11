import "./roll.scss";
import logo from "./assets/sttark_vertical.png";

export const Roll = ({ art = logo }) => {
  return (
    <main className='component-wrapper'>
      <div className='inputs'></div>

      {/* roll starts */}
      <div className='roll'>
        {/*left side part of the roll*/}
        <div className='roll_thickness'>
          <div className='thickness_core'></div>
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
