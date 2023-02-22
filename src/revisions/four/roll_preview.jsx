import { getOrientation, getShape } from "./helpers/get_options";
import { getDimensions } from "./helpers/get_dimensions";
import { useState, useRef, useEffect } from "react";
import curvedLength from "./assets/curved_length.png";
import "./roll_preview.scss";

import { getSvgMask, transformMask, transformRoundShape, transformCustomShape } from "./helpers/get_coordinates";

const rollDimensions = {
	width: 160,
	length: 340,
};

export const PreviewRoll4 = ({ width = 12, length = 12, shape = 1, orientation = 3, squaredCorners = false }) => {
	const [rollLength, setRollLength] = useState(null);
	let rollLengthDOMEL = useRef(null);
	const isSquaredCorners = squaredCorners ? "squared-corners" : "";

	// get dimensions
	const { labelWidth, labelLength, labels } = getDimensions(width, length, rollLength);

	// get shape
	const labelShape = getShape(shape);

	// label orientation
	let labelOrientation = getOrientation(orientation);

	// // get the corresponding svg mask
	// const SVGMask = getSvgMask(width, length, squaredCorners);

	// // transform the square mask on size adjustment
	// const SVGMaskTransform = transformMask(width, length, orientation);

	// // transform the circular shape on size adjustment
	// const roundTransform = transformRoundShape(width, length, orientation);

	// // transform the circular shape on size adjustment
	// const customTransform = transformCustomShape(width, length, orientation);

	// // decide whether is round or custom shape
	// const customOrRound = shape === 2 ? roundTransform : customTransform;

	const noLables = labels.length === 0 || !labels || shape > 3;

	useEffect(() => {
		const rollL = rollLengthDOMEL.current.getBoundingClientRect();
		setRollLength(rollL.width);
	}, []);

	return (
		<div className='roll-wrapper version-four'>
			{/* Entire roll element */}
			<div className={`roll`} style={{ height: `${labelWidth}px`, width: rollDimensions.width }}>
				{/* Thickness: The oval that goes on top of the roll showing the diameter (whole) and thickness of the roll */}
				<div className={`roll_thickness ${labelWidth <= 40 && "min-width"}`}>
					<div className='thickness_core'></div>
				</div>

				{/* Cylinder: The cylinder which the labels wrap around  */}
				<div className='cylinder'>
					{/* Length: The length of the roll that is curved as it unrolls */}
					<div className='roll-length-wrapper'>
						<img src={curvedLength} alt='curved roll length' className='folded-roll-length' />
						{/* Length: The material that holds the labels. The label count is extrapolating the width props of this DOM Element*/}
						<div
							ref={rollLengthDOMEL}
							id='roll_length'
							className={`roll_length ${labelWidth <= 40 && "min-width"} ${noLables ? "min-height" : ""}`}
							style={{
								minWidth: rollDimensions.length,
							}}
						>
							{shape > 3 && <div className='loading'>Loading...</div>}
							<div className={`label-wrapper`}>
								{labels.map((label, i) => (
									<div
										key={i}
										className={`label ${labelShape}  ${isSquaredCorners}`}
										style={{
											height: `${labelWidth}px`,
											width: `${labelLength}px`,
										}}
									></div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
