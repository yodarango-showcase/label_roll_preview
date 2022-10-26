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
