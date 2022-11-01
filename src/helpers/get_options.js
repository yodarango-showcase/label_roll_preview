export const getOrientation = (orientation) => {
  let labelOrientation;
  switch (orientation) {
    case 1:
      labelOrientation = "one";
      break;
    case 2:
      labelOrientation = "two";
      break;
    case 3:
      labelOrientation = "three";
      break;
    case 4:
      labelOrientation = "four";
      break;
    default:
      labelOrientation = "three";
  }

  return labelOrientation;
};

export const getShape = (shape) => {
  // label shape
  let labelShape;

  switch (shape) {
    case 1:
      labelShape = "square";
      break;
    case 2:
      labelShape = "round";
      break;
    case 3:
      labelShape = "custom";
      break;
    case 4:
      labelShape = "previous";
      break;
    default:
      labelShape = "square";
  }

  return labelShape;
};
