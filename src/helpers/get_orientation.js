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
