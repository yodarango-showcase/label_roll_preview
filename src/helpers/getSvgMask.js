export const getSvgMask = (width, length) => {
  if (width === 12) {
    if (length >= 5) {
      console.log(length);
      return {
        path: "M1 108.5V1.5C1 1.5 13.9462 11.2951 31.5161 13.9664C61.1075 18.4654 87 18 87 18V141C87 141 47.2366 142.877 31.5161 135.815C11.172 126.676 1 108.5 1 108.5Z",
        width: length === 7 ? 70 : length === 6 ? 60 : length === 5 ? 50 : 88,
        height: 148,
        addStyles: {},
      };
    }
  }
  if (width === 11) {
    return {
      path: "M1 97.4888V1C1 1 13.9462 9.83286 31.5161 12.2417C61.1075 16.2988 87 15.8791 87 15.8791V126.796C87 126.796 47.2366 128.489 31.5161 122.121C11.172 113.88 1 97.4888 1 97.4888Z",
      width: length >= 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 88,
      height: 128,
      addStyles: {},
    };
  } else if (width === 10) {
    return {
      path: "M1 91.5967V2C1 2 13.9462 11.8666 31.5161 14.1034C61.1075 17.8707 87 17.6336 87 17.6336V118.811C87 118.811 47.2366 120.382 31.5161 114.469C11.172 106.817 1 91.5967 1 91.5967Z",
      width: length >= 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 88,
      height: 120,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width === 9) {
    return {
      path: "M1 82.1731V1C1 1 17.2473 10.4735 34 12.5C62.2151 15.9131 83 15.1638 83 15.1638V106.828C83 106.828 45.086 108.252 30.0968 102.895C10.6989 95.9623 1 82.1731 1 82.1731Z",
      width: length >= 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 108,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width === 8) {
    return {
      path: "M1 71V1C1 1 15.7473 8.17232 32.5 9.99522C60.7151 13.0654 83 12.3914 83 12.3914V94.8457C83 94.8457 45.086 96.1265 30.0968 91.3076C10.6989 85.0713 1 71 1 71Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 96,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width >= 7) {
    return {
      path: "M1 62.2827V1C1 1 15.7473 7.89042 32.5 9.5C60.7151 12.2109 83 12 83 12V83.8638C83 83.8638 45.086 84.9947 30.0968 80.7397C10.6989 75.2332 1 62.2827 1 62.2827Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 85,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width >= 6) {
    return {
      path: "M1 53.4226V1C1 1 15.7473 6.89421 32.5 8.27108C60.7151 10.59 83 10.4096 83 10.4096V71.8835C83 71.8835 45.086 72.8508 30.0968 69.211C10.6989 64.5007 1 53.4226 1 53.4226Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 73,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width >= 5) {
    return {
      path: "M1 45.1894V1C1 1 15.7473 6.3282 32.5 7.5C60.7151 9.47357 83 9 83 9V60.9008C83 60.9008 45.086 61.7241 30.0968 58.6264C10.6989 54.6176 1 45.1894 1 45.1894Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 62,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width >= 4) {
    return {
      path: "M1 36.5V1C1 1 18.2473 6.04303 35 7C63.2151 8.61175 83 8 83 8V49.919C83 49.919 45.086 50.5914 30.0968 48.0616C10.6989 44.7877 1 36.5 1 36.5Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 51,
      addStyles: { transform: "translate(-2px, -18%)" },
    };
  } else if (width >= 3) {
    return {
      path: "M1 30.2551V1.5C1 1.5 17.8272 6.69753 34.5 8.5C53 10.5 83 9.5 83 9.5V40.9355C83 40.9355 45.086 41.4707 30.0968 39.4572C10.6989 36.8514 1 30.2551 1 30.2551Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 42,
      addStyles: { transform: "translate(-2px, -28%)" },
    };
  } else if (width >= 2) {
    return {
      path: "M1 21V1.5C1 1.5 17.3272 6.73156 34 8.02564C52.5 9.46154 83 9.46154 83 9.46154V30.9537C83 30.9537 45.086 31.3379 30.0968 29.8923C10.6989 28.0216 1 21 1 21Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 32,
      addStyles: { transform: "translate(-2px, -45%)" },
    };
  } else if (width === 1) {
    return {
      path: "M1 12.7414V1C1 1 11.5 6.78659 39 7.874C70 9.0998 83 7.874 83 7.874V18.8233C83 18.8233 61.0056 20.6012 39 19.7862C13 18.8233 1 12.7414 1 12.7414Z",
      width: length === 7 ? 70 : length >= 6 ? 60 : length >= 5 ? 50 : 84,
      height: 21,
      addStyles: { transform: "translate(-2px, -65%)" },
    };
  } else
    return {
      path: "",
      width: 88,
    };
};
