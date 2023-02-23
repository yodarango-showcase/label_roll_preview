import { getOrientation, getShape } from "./helpers/get_options";
import { getDimensions } from "./helpers/get_dimensions";
import { useState, useRef, useEffect } from "react";
import curvedLengthLarge from "./assets/curved_length_large.png";
import "./roll_preview.scss";

const rollDimensions = {
	width: 160,
	length: 340,
};

export const PreviewRoll4 = ({ width = 12, length = 12, shape = 1, orientation = 1, squaredCorners = false }) => {
	const [rollLength, setRollLength] = useState(null);
	let rollLengthDOMEL = useRef(null);

	// const get the core's size
	let coreSize = length <= 17 ? `${59 - length * 2}%` : "25%";

	// get dimensions
	const { labelWidth, labelLength, labels, cornerRadius } = getDimensions(width, length, rollLength, squaredCorners, shape);

	// get shape
	const labelShape = getShape(shape);

	// label orientation
	let labelOrientation = getOrientation(orientation);

	const labelsExists = labels && labels.length > 0;

	useEffect(() => {
		const rollL = rollLengthDOMEL.current.getBoundingClientRect();
		setRollLength(rollL.width);
	}, []);

	return (
		<div className='roll-wrapper version-four'>
			{/* Entire roll element */}
			<div className={`roll`} style={{ height: `${labelWidth}px`, width: rollDimensions.width }}>
				{/* Thickness: The oval that goes on top of the roll showing the diameter (whole) and thickness of the roll */}
				<div className={`roll_thickness`}>
					<div className='thickness_core' style={{ width: coreSize, height: coreSize }}></div>
				</div>

				{/* Cylinder: The cylinder which the labels wrap around  */}
				<div className='cylinder'>
					{/* Length: The length of the roll that is curved as it unrolls */}
					{/*<div className='roll-length-wrapper'>*/}
					<img src={curvedLengthLarge} alt='curved roll length' className={`folded-roll-length `} />
					{/* Length: The material that holds the labels. The label count is extrapolating the width props of this DOM Element*/}
					<div
						ref={rollLengthDOMEL}
						id='roll_length'
						className={`roll_length ${labelWidth <= 40 ? "min-width" : ""}`}
						style={{
							minWidth: rollDimensions.length,
						}}
					>
						{shape > 3 && <div className='loading'>Loading...</div>}
						<div className={`label-wrapper`}>
							{labelsExists &&
								labels.map((label, i) => (
									<div
										key={i}
										className={`label ${labelShape} `}
										style={{
											height: `${labelWidth}px`,
											width: `${labelLength}px`,
											borderRadius: `${cornerRadius}`,
										}}
									>
										<div className={`orientation ${labelOrientation} orientation-${labelShape}`}></div>
									</div>
								))}
						</div>
					</div>
					{/*</div>*/}
				</div>
			</div>
		</div>
	);
};
