export const getDimensions = (width, length, dimensions, squaredCorners, shape) => {
	const area = dimensions ? dimensions : 340;

	// dimensions
	let labelWidth;
	let labelLength;
	let labelCount;
	let cornerRadius;

	// width
	if (!width) {
		//if there is not width but there is a length make it a square by assigning it the value of the length
		if (labelLength && labelLength <= 12) {
			labelWidth = labelLength;
		} else {
			labelWidth = 120; // else let it be the default value
		}
	} else if (width >= 12) {
		labelWidth = 120;
	} else if (width <= 4) {
		labelWidth = 40;
	} else {
		labelWidth = width * 10;
	}

	// length
	if (!length) {
		//if there is not length but there is a width make it a square by assigning it the value of the width
		if (labelWidth) {
			labelLength = labelWidth;
		} else {
			labelLength = 170; // else let it be the default value
		}
	} else if (length >= 17) {
		labelLength = 170;
	} else if (length <= 4) {
		labelLength = 40;
	} else {
		labelLength = length * 10;
	}

	if (width - length === 0) {
		labelLength = 120;
		labelWidth = 120;
	} else if (width - length > 0 && width - length <= 3) {
		let percentage = (width - length) / 10;
		percentage = 120 * percentage;
		labelWidth = 120;
		labelLength = 120 - percentage;
	} else if (length - width > 0 && length - width <= 3) {
		let percentage = (length - width) / 10;
		percentage = 120 * percentage;
		labelLength = 120;
		labelWidth = 120 - percentage;
	}

	// get the area that should be straight
	labelCount = Math.floor(area / (labelLength + 5)); // 5 accounts for the margin set
	//console.log(labelLength, area);
	labelCount = labelCount > 20 ? 20 : (labelCount <= 2) & (labelLength <= 140) ? 3 : (labelCount <= 2) & (labelLength > 140) ? 2 : labelCount;

	// calculates round corner radius

	if (shape === 1) {
		if (squaredCorners) {
			cornerRadius = "0px";
		} else {
			if (length - width > 8 || width - length > 8) {
				cornerRadius = "0.3em";
			} else {
				cornerRadius = "0.5em";
			}
		}
	} else if (shape === 2) {
		cornerRadius = "50%";
	} else {
		cornerRadius = "0px";
	}

	return {
		labels: [...Array(labelCount)],
		cornerRadius,
		labelLength,
		labelWidth,
	};
};
