export const getDimensions = (width, length, dimensions) => {
  // get possible label count
  const area = dimensions * 1.5;

  // dimensions
  let labelWidth;
  let labelLength;
  let labelCount;

  // width
  if (!width) {
    // if there is not width but there is a length make it a square by assigning it the value of the length
    if (labelLength && labelLength <= 12) {
      labelWidth = labelLength;
    } else {
      labelWidth = 120; // else let it be the default value
    }
  } /*else if (width <= 4) {
    // since both labels smallest size is 4, they will always be a square regardless of the dimensions. Make it a rectangle if the length is greater than the width
    if (length > width && length <= 4) {
      labelWidth = 30;
    } else {
      labelWidth = 40;
    }
  }*/ else if (width >= 12) {
    labelWidth = 120;
  } else {
    labelWidth = width * 10;
  }

  // length
  if (!length) {
    // if there is not length but there is a width make it a square by assigning it the value of the width
    if (labelWidth) {
      labelLength = labelWidth;
    } else {
      labelLength = 170; // else let it be the default value
    }
  } /*else if (length <= 4) {
    // since both labels smallest size is 4, they will always be a square regardless of the dimensions. Make it a rectangle if the length is greater than the width
    if (length < width && width <= 4) {
      labelLength = 30;
    } else {
      labelLength = 40;
    }
  } */ else if (length >= 17) {
    labelLength = 170;
  } else {
    labelLength = length * 10;
  }

  // count
  if (!length) {
    if (labelLength <= 60) {
      //labelLength is set above if !length
      labelCount = 3;
    } else {
      labelCount = 2;
    }
  } else if (length > 13) {
    labelCount = 1;
  } else if (length < 4) {
    labelCount = 3;
  } else {
    labelCount = Math.ceil(area / (length * 10));
  }

  return {
    labelCount: labelCount,
    labelWidth: labelWidth,
    labelLength: labelLength,
  };
};
