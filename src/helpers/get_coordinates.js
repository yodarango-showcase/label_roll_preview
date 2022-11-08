import { validateDimensions } from "./validate";
import { roundLabelCoordinates } from "./data/round_labels";
import { transformation, SquareLabelCoordinates } from "./data/square_labels";
import { customLabelCoordinates } from "./data/custom_labels";

export const getSvgMask = (width, length, squaredCorners) => {
  const { labelWidth, labelLength } = validateDimensions(width, length);
  const index = SquareLabelCoordinates[labelWidth](labelLength, squaredCorners);

  let mask = {
    image:
      labelLength >= 12
        ? "logo-3"
        : labelLength >= 5
        ? "logo-1"
        : labelLength >= 3
        ? "logo-2"
        : "logo-4",
    path: index.path,
    addStyles: index.addStyles,
  };

  if (labelLength >= 5)
    mask.addStyles[0].width = `${
      labelLength === 7
        ? 70
        : labelLength === 6
        ? 60
        : labelLength === 5
        ? 50
        : 88
    }px`;
  else if (labelLength === 4)
    (mask.addStyles[0].width = `${39}px`),
      (mask.addStyles[1].width = `${44}px`);
  else if (labelLength === 3)
    (mask.addStyles[0].width = `${33}px`),
      (mask.addStyles[1].width = `${35}px`);
  else if (labelLength === 2)
    (mask.addStyles[0].width = `${18}px`),
      (mask.addStyles[1].width = `${19}px`),
      (mask.addStyles[2].width = `${21}px`),
      (mask.addStyles[3].width = `${20}px`);
  else if (labelLength === 1)
    (mask.addStyles[0].width = `${13}px`),
      (mask.addStyles[1].width = `${13}px`),
      (mask.addStyles[2].width = `${14}px`),
      (mask.addStyles[3].width = `${14}px`);
  return mask;
};

export const transformMask = (width, length, orientation) => {
  const { labelWidth, labelLength } = validateDimensions(width, length);
  const transform = transformation[labelWidth](labelLength, orientation);

  return transform;
};

export const transformRoundShape = (width, length, orientation) => {
  const { labelWidth, labelLength } = validateDimensions(width, length);
  const transform = roundLabelCoordinates[labelWidth](labelLength, orientation);
  transform.image =
    labelLength >= 12
      ? "logo-3"
      : labelLength >= 5
      ? "logo-1"
      : labelLength >= 3
      ? "logo-2"
      : "logo-4";
  return transform;
};

export const transformCustomShape = (width, length, squaredCorners) => {
  const { labelWidth, labelLength } = validateDimensions(width, length);
  const index = SquareLabelCoordinates[labelWidth](labelLength, squaredCorners);

  let mask = {
    image:
      labelLength >= 12
        ? "logo-3"
        : labelLength >= 5
        ? "logo-1"
        : labelLength >= 3
        ? "logo-2"
        : "logo-4",
    path: index.path,
    addStyles: index.addStyles,
  };

  if (labelLength >= 5)
    mask.addStyles[0].width = `${
      labelLength === 7
        ? 70
        : labelLength === 6
        ? 60
        : labelLength === 5
        ? 50
        : 88
    }px`;
  else if (labelLength === 4)
    (mask.addStyles[0].width = `${39}px`),
      (mask.addStyles[1].width = `${44}px`);
  else if (labelLength === 3)
    (mask.addStyles[0].width = `${33}px`),
      (mask.addStyles[1].width = `${35}px`);
  else if (labelLength === 2)
    (mask.addStyles[0].width = `${18}px`),
      (mask.addStyles[1].width = `${19}px`),
      (mask.addStyles[2].width = `${21}px`),
      (mask.addStyles[3].width = `${20}px`);
  else if (labelLength === 1)
    (mask.addStyles[0].width = `${13}px`),
      (mask.addStyles[1].width = `${13}px`),
      (mask.addStyles[2].width = `${14}px`),
      (mask.addStyles[3].width = `${14}px`);
  return mask;
};
