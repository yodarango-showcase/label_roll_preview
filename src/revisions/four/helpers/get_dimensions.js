export const getDimensions = (width, length, dimensions) => {
  const area = dimensions ? dimensions : 340;

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
  } else if (width >= 12) {
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
  } else if (length >= 17) {
    labelLength = 170;
  } else {
    labelLength = length * 10;
  }

  // get the area that should be curved
  let consideredCurvedArea = labelLength <= 10 ? 40 : 80;

  // get the area that should be straight
  labelCount = Math.floor(area / (labelLength + 5)); // 5 accounts for the margin set
  labelCount =
    labelCount > 20
      ? 20
      : (labelCount <= 2) & (labelLength <= 140)
      ? 3
      : (labelCount <= 2) & (labelLength > 140)
      ? 2
      : labelCount;

  // construct the labels object
  const labels = [...Array(labelCount)].map((_, index) => {
    if (labelLength <= consideredCurvedArea || index === 0) {
      consideredCurvedArea = consideredCurvedArea - labelLength;

      return { id: index, isCurved: true };
    } else {
      // heal the gap between curved and straight area
      if (labelLength <= 20) {
        return {
          id: index,
          isCurved: false,
          addStyles: { transform: `translateX(-13px)` },
        };
      }
      if (labelLength <= 40) {
        return {
          id: index,
          isCurved: false,
          addStyles: { transform: `translateX(-5px)` },
        };
      }
      // if (labelLength >= 100) {
      //   return {
      //     id: index,
      //     isCurved: false,
      //     addStyles: { transform: `translateX(-7px)` },
      //   };
      // }
      if (labelLength >= 80) {
        if (labelWidth >= 100) {
          return {
            id: index,
            isCurved: false,
            addStyles: { transform: `translateX(-4px)` },
          };
        } else {
          return {
            id: index,
            isCurved: false,
            addStyles: { transform: `translateX(-7px)` },
          };
        }
      }
      if (labelLength >= 40) {
        return {
          id: index,
          isCurved: false,
          addStyles: { transform: `translateX(-3px)` },
        };
      }
    }
  });

  return {
    labels,
    labelWidth,
    labelLength,
  };
};
