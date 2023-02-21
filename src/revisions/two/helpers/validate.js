export const validateDimensions = (width, length) => {
  let labelLength;
  let labelWidth;

  // width
  if (!width) {
    console.log("label Length", labelLength);
    // if there is not width but there is a length make it a square by assigning it the value of the length
    if (labelLength && labelLength <= 12) {
      console.log("label Length", labelLength);
      labelWidth = labelLength;
    } else {
      labelWidth = 12; // else let it be the default value
    }
  } else if (width >= 12) {
    labelWidth = 12;
  } else {
    labelWidth = width;
  }

  // length
  if (!length) {
    // if there is not length but there is a width make it a square by assigning it the value of the width
    if (labelWidth) {
      labelLength = labelWidth;
    } else {
      labelLength = 17; // else let it be the default value
    }
  } else if (length >= 17) {
    labelLength = 17;
  } else {
    labelLength = length;
  }

  return {
    labelLength,
    labelWidth,
  };
};
