const coordinates = {
  1: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 12.7414V1C1 1 11.5 6.78659 39 7.874C70 9.0998 83 7.874 83 7.874V18.8233C83 18.8233 61.0056 20.6012 39 19.7862C13 18.8233 1 12.7414 1 12.7414Z",
        ],
        addStyles: [{ transform: "translate(-2px, -65%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 12.5V1.5C8.5 4.5 23 7.96667 39 8.5V21C20 19.5 8 15.5 1 12.5Z",
          "M43 12.5338V0.591337C28 0.874413 13.5 1.15746 1 0.591309V13C13.5 13.3971 30 12.9308 43 12.5338Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },
  2: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 21V1.5C1 1.5 17.3272 6.73156 34 8.02564C52.5 9.46154 83 9.46154 83 9.46154V30.9537C83 30.9537 45.086 31.3379 30.0968 29.8923C10.6989 28.0216 1 21 1 21Z",
        ],
        addStyles: [{ transform: "translate(-2px, -45%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 21V1.5C11 5 23 8 39 9V31.5C21.5 31 9.5 25.5 1 21Z",
          "M43 23V1.49688C28 1.99375 13.5 1.99375 1 1V23.4773C13.5 24.1742 30 23.697 43 23Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  3: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 30.2551V1.5C1 1.5 17.8272 6.69753 34.5 8.5C53 10.5 83 9.5 83 9.5V40.9355C83 40.9355 45.086 41.4707 30.0968 39.4572C10.6989 36.8514 1 30.2551 1 30.2551Z",
        ],
        addStyles: [{ transform: "translate(-2px, -28%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 30V1.5C11 4.5 23.5 7.63354 39 8.7884V40C22.5 38 10 35 1 30Z",
          "M43 33V1.4349C28 1.99225 13 1.99225 1 1V32.5C13.5 33.4922 30 33.9922 43 33Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  4: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 36.5V1C1 1 18.2473 6.04303 35 7C63.2151 8.61175 83 8 83 8V49.919C83 49.919 45.086 50.5914 30.0968 48.0616C10.6989 44.7877 1 36.5 1 36.5Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 36.5V1C11.1333 3.82353 23.2933 6.43698 39 7.64706V50C22.5 48.5 9.61333 43.7605 1 36.5Z",
          "M43 43V1.29511C28.5 1.29511 13 1.53462 1 0.727051V43C13.5 43.8076 29.5 43.5 43 43Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  5: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 45.1894V1C1 1 15.7473 6.3282 32.5 7.5C60.7151 9.47357 83 9 83 9V60.9008C83 60.9008 45.086 61.7241 30.0968 58.6264C10.6989 54.6176 1 45.1894 1 45.1894Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 45V1C11 4.5 23 6.5 38.5 8V60.5C23 58.5 9.5 54 1 45Z",
          "M43 54V1.99936C28.5 1.99936 13 2.21777 1 1.21777V53.8014C13.5 54.8014 30 54.5 43 54Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  6: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 53.4226V1C1 1 15.7473 6.89421 32.5 8.27108C60.7151 10.59 83 10.4096 83 10.4096V71.8835C83 71.8835 45.086 72.8508 30.0968 69.211C10.6989 64.5007 1 53.4226 1 53.4226Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 53.5V1C10.5 5 21 7.5 38.5 9.5V71C23 69 9 63 1 53.5Z",
          "M42.5 64L43 2.5C28.5 3 13 3 1 1.5V63.5C13 65 29 64.5 42.5 64Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  7: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 62.2827V1C1 1 15.7473 7.89042 32.5 9.5C60.7151 12.2109 83 12 83 12V83.8638C83 83.8638 45.086 84.9947 30.0968 80.7397C10.6989 75.2332 1 62.2827 1 62.2827Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 62.1992V1C10.5 5.5 21 8.81776 38.5 10.8178V82.5C23 80 9 73.5 1 62.1992Z",
          "M42.5 73.5L43 1.99993C28 2.5 12 2.25349 0.999996 1L1.5 73C13.5 74.7793 29.5 74.5 42.5 73.5Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -13px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  8: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 71V1C1 1 15.7473 8.17232 32.5 9.99522C60.7151 13.0654 83 12.3914 83 12.3914V94.8457C83 94.8457 45.086 96.1265 30.0968 91.3076C10.6989 85.0713 1 71 1 71Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 72V1.5C9 6.5 20.5 10 38.5 12.5V94C22.5 91 8.5 83.5 1 72Z",
          "M43 83.881V2C28 2.70718 12 2 0.999996 0.746509V82.7209C13 84.5002 27.5 84.5002 43 83.881Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -15px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  9: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 82.1731V1C1 1 17.2473 10.4735 34 12.5C62.2151 15.9131 83 15.1638 83 15.1638V106.828C83 106.828 45.086 108.252 30.0968 102.895C10.6989 95.9623 1 82.1731 1 82.1731Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 81.5V1.5C11.5 7.5 20.5 11 38.5 14.5V105.5C22.5 102.5 8 93.5 1 81.5Z",
          "M43 93.5V2C27.5 3 15.5 2.5 0.999996 1V92.3609C12.5 94.5271 32.5 94.5 43 93.5Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -16px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  10: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 91.5967V2C1 2 13.9462 11.8666 31.5161 14.1034C61.1075 17.8707 87 17.6336 87 17.6336V118.811C87 118.811 47.2366 120.382 31.5161 114.469C11.172 106.817 1 91.5967 1 91.5967Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 90.5V1C12 8.5 17.5 12 38.5 15V114.801C22.5 112 7.5 101.5 1 90.5Z",
          "M43 104V2.5C27.5 3 15.5 3 0.999996 1.5V101.75C13 104.25 27.5 105 43 104Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -17px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },

  11: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 97.4888V1C1 1 13.9462 9.83286 31.5161 12.2417C61.1075 16.2988 87 15.8791 87 15.8791V126.796C87 126.796 47.2366 128.489 31.5161 122.121C11.172 113.88 1 97.4888 1 97.4888Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length <= 5)
      return {
        path: [
          "M1 97.5V2C9 8.82331 17 14.133 38 18V124.5C22.5 121.316 13 113.421 1 97.5Z",
          "M43 113V2.47822C28.3253 3.13815 11.1205 2.47822 0.999996 1V107.5C10.1084 110.102 25.7952 113 43 113Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -20px)" },
          { transform: "translate(-5px, -2px)" },
        ],
      };
  },
  12: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 108.5V1.5C1 1.5 13.9462 11.2951 31.5161 13.9664C61.1075 18.4654 87 18 87 18V141C87 141 47.2366 142.877 31.5161 135.815C11.172 126.676 1 108.5 1 108.5Z",
        ],
        addStyles: [{ transform: "translate(-2px, -15%)" }],
      };
    else if (length < 5)
      return {
        path: [
          "M1 107V1.5C9 9 17 14.2495 38 18.5V134.5C22.5 131 13 124.5 1 107Z",
          "M42.5 123V2.78207C28 3.4999 11 2.78207 1 1.17417V117.628C10 120.459 25.5 123 42.5 123Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -21px)" },
          { transform: "translate(-5px, -3px)" },
        ],
      };
  },
};

export const getSvgMask = (width, length) => {
  length = length > 0 && length <= 17 ? length : 12; // 12 is the default length
  width = width > 0 && width <= 12 ? width : 12; // 12 is the default width
  const index = coordinates[width](length);

  let mask = {
    path: index.path,
    addStyles: index.addStyles,
  };

  // add width here rather than in obj for cleaner syntax
  if (length >= 5)
    mask.addStyles[0].width = `${
      length === 7 ? 70 : length === 6 ? 60 : length === 5 ? 50 : 88
    }px`;
  else if (length === 4)
    (mask.addStyles[0].width = `${39}px`),
      (mask.addStyles[1].width = `${44}px`);
  else if (length === 3)
    (mask.addStyles[0].width = `${33}px`),
      (mask.addStyles[1].width = `${38}px`);
  // console.log(mask);
  return mask;
};
