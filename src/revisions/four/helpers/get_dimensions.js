export const getDimensions = (width, length, dimensions) => {
	const area = dimensions ? dimensions : 340;

	// dimensions
	let labelWidth;
	let labelLength;
	let labelCount;

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

	return {
		labels: [...Array(labelCount)],
		labelWidth,
		labelLength,
	};
};

export const calculateRadius = (squaredCorners, shape, labelWidth, labelLength) => {
	if (squaredCorners) {
		return "0px";
	}

	if (shape === 1) {
		if (labelWidth >= 4 && labelLength >= 4) {
			return `.5em`;
		} else {
			return `.3em`;
		}
	}

	if (shape === 2) {
		return "50%";
	}

	return "0px";
};
