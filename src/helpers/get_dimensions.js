export const getDimensions = (width, length, dimensions) => {
  // get possible label count
  const area = dimensions;

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
  // if (!length) {
  //   if (labelLength <= 60) {
  //     //labelLength is set above if !length
  //     labelCount = 3;
  //   } else {
  //     labelCount = 2;
  //   }
  //   area / labelLength
  // } else if (length > 13) {
  //   labelCount = 1;
  // } else if (length < 4) {
  //   labelCount = 3;
  // } else {
  //   labelCount = Math.ceil(area / (length * 10));
  // }

  // get the area that should be curved
  let consideredCurvedArea = length <= 1 ? 40 : 80; //length >= 4 ? 80 : 60; // the first 3 labels will be curved

  // get the area that should be straight
  labelCount = Math.floor((area - consideredCurvedArea) / (labelLength + 5)); // 5 accounts for the margin set
  labelCount = labelCount <= 1 ? 2 : labelCount; // makes sure there is at least one label present
  console.log("label count", labelCount);
  console.log("straight area", area - consideredCurvedArea);

  const labels = [...Array(labelCount)].map((label, index) => {
    if (labelLength <= consideredCurvedArea || index === 0) {
      consideredCurvedArea = consideredCurvedArea - labelLength;
      //console.log("Considered Area", consideredArea);

      return { id: index + 1, isCurved: true };
    }
    return { id: index + 1, isCurved: false };
  });

  //console.log("labels", labels);
  return {
    labels,
    labelWidth,
    labelLength,
  };
};

// responsible for adjusting any inconsistent gaps between the curved and the straight area
// export const getMarginBetween = (firstEl, secondEl) => {
//   const firstElCoord = firstEl.getBoundingClientRect();
//   const secondElCoord = secondEl.getBoundingClientRect();

//   console.table({
//     curved: firstElCoord.x + firstElCoord.width,
//     straight: secondElCoord.x,
//   });

//   // get the distance between the last curved El and the first straight El to see how many pixels of marginLeft we should subtract
//   let assignMargin = secondElCoord.x - (firstElCoord.x + firstElCoord.width);

//   if (firstEl.width < 120)
//     assignMargin = assignMargin > 5 ? (assignMargin -= 3) : 0; //adjust gap only if it is greater than 5px
//   if (firstEl.width >= 120)
//     assignMargin = assignMargin > 5 ? (assignMargin -= 3) : 0;
//   return assignMargin;
// };
