import React, {useEffect} from 'react';
import './preview_roll.scss';
import logo from './assets/sttark_label_logo.png';

export const PreviewRoll = ({ labelDirection = 1, art }) => {

    art = art ? art  : logo;

    let labelFlow;
    let isArtProportinal;

    switch (labelDirection) {
        case 1:
            labelFlow = 'labelFlow1';
            break;
        case 2:
            labelFlow = 'labelFlow2';
            break;
        case 3:
            labelFlow = 'labelFlow3';
            break;
        case 4:
            labelFlow = 'labelFlow4';
            break;
    }

    // function handleValidateSize(e){
    //   const img  =new Image();
    //   img.src = art;
    //   const width = img.width;
    //   const heigth = img.height;
    //
    // }
    //
    // useEffect(handleValidateSize, [])

    return (
        <div className="roll-wrapper">
            <div className="roll">
                {/*left side part of the roll*/}
                <div className="roll_thickness">
                    <div className="thickness_core"></div>
                </div>

                {/*the width of the roll: the cylinder tha runs horizontally*/}
                <div className="roll_width--wrapper">
                    <div className="roll_width">
                        <div className="width_top-border"></div>
                        <div className="width_top-border border_thin"></div>
                        <div className="width_label-wrapper">
                            <div className="label-wrapper_label-wrapper">
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
                <div className="roll_length">
                    {[...Array(3)].map((_, i) => (
                        <div className="length_label-wrapper" key={i}>
                            <div
                                className={`length_label ${labelFlow}`}
                                style={{
                                    backgroundImage: `url(${art})`,
                                }}
                            >
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
