export const customLabelCoordinates = {
  1: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [
                {
                  transform: `translate(-2px, -3px) skewY(3deg)`,
                },
              ]
            : [
                {
                  transform: `translate(-2px, -3px) skewY(3deg)`,
                },
              ],
        design: [
          {
            height: "105%",
            width: "90%",
            transform: " translate(-50%, 3px)",
          },
        ],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "100%",
            width: length >= 13 && length <= 15 ? "25%" : "20%",
            rotate:
              length >= 13 && length <= 15
                ? `${isVertical ? 0 : 5}deg`
                : "5deg",
            transform: "skew(0deg)",
            translate: isVertical
              ? "-2% 0%"
              : length >= 13 && length <= 15
              ? `-10% -3px`
              : `-1px -3px`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "3%" : "35%",
        },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "15%" : "80%",
            width: length <= 10 ? "55%" : "35%",
            rotate: isVertical ? "5deg" : "0deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? "-18% 1px" : `-10% -5%`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "5%" : "40%",
        },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-2px) skewY(2deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "15%" : "55%",
            width: "65%",
            rotate: isVertical ? "5deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? "-15% 1px" : `-10% -5%`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "5%" : "40%",
        },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-3px) skewY(3deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            backgroundSize: isVertical ? "18%" : "45%",
            width: "70%",
            rotate: isVertical ? "5deg" : "0deg",
            transform: "skew(0deg)",
            translate: isVertical ? `-10% 0px` : `-10% 0px`,
          },
          {
            backgroundSize: isVertical ? "18%" : "45%",
            width: "70%",
            rotate: "3deg",
            transform: "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "10%" : "40%",
        },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "12%" : "40%",
                rotate: isVertical ? "5deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(5deg)",
                translate: isVertical ? `-13% 0px` : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "12%" : "40%",
                rotate: isVertical ? "0deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(5deg)",
                translate: isVertical ? `-8% 0px` : `-1px 0px`,
              },
              { backgroundSize: isVertical ? "12%" : "40%", rotate: "2deg" },
              { backgroundSize: isVertical ? "12%" : "40%" },
            ],
            straightLabelStyles: {
              translate: "-50% 0px",
            },
            straightDesignStyles: {
              backgroundSize: isVertical ? "10%" : "40%",
            },
          }
        : {
            label: [
              { translate: "0px -2px" },
              { translate: "-4px 0px" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "20%" : "40%",
                rotate: isVertical ? "10deg" : "10deg",
                transform: "skew(5deg)",
                translate: `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "20%" : "40%",
                rotate: isVertical ? "0deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: "-1px 0px",
              },
              {
                backgroundSize: isVertical ? "20%" : "40%",
                rotate: isVertical ? "0deg" : "5deg",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
            straightDesignStyles: {},
          };
  },
  2: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -3px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(0deg) translate(-50%, 3px)",
          },
        ],
        orientation: [
          {
            width:
              orientation === 4
                ? length >= 13 && length <= 15
                  ? "50%"
                  : "35%"
                : length >= 13 && length <= 15
                ? "60%"
                : "40%",
            rotate:
              orientation === 4
                ? length >= 13 && length <= 15
                  ? "4deg"
                  : "7deg"
                : length >= 13 && length <= 15
                ? "2deg"
                : "5deg",
            backgroundSize: isVertical ? "10%" : "65%",
            transform: isVertical ? "skew(0)" : "skew(1deg)",
            translate: isVertical
              ? `0% 20%`
              : length >= 13 && length <= 15
              ? `-10% 2%`
              : `-10% 3%`,
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "4%" : "35%",
        },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "12%" : "15%",
            width: length <= 10 ? "80%" : "65%",
            rotate: isVertical ? "6deg" : "2deg",
            transform: "skew(5deg)",
            translate: isVertical ? "-13%" : `-5px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "7%" : "35%",
        },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "15%" : "45%",
            width: "85%",
            rotate: isVertical ? "3deg" : "2deg",
            transform: isVertical ? "0deg" : "skew(5deg)",
            translate: isVertical ? `-13% 0px` : `-4px 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "10%" : "35%",
        },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(7deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "5deg" : "0deg",
            transform: "skew(0deg)",
            translate: `-3px 0px`,
            backgroundSize: isVertical ? "20%" : "45%",
          },
          {
            rotate: isVertical ? "8deg" : "3deg",
            transform: "skew(5deg)",
            backgroundSize: isVertical ? "20%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "20%" : "45%",
                rotate: isVertical ? "5deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-2px 0px`,
              },
              {
                translate: "-2px 0px",
                backgroundSize: isVertical ? "20%" : "45%",
                rotate: isVertical ? "5deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              { backgroundSize: isVertical ? "20%" : "45%", rotate: "2deg" },
              { backgroundSize: isVertical ? "20%" : "45%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "20%" : "50%",
                rotate: isVertical ? "5deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(5deg)",
                translate: `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "20%" : "50%",
                translate: "-1px 0px",
                rotate: isVertical ? "4deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              {
                backgroundSize: isVertical ? "20%" : "50%",
                rotate: isVertical ? "0deg" : "5deg",
              },
              { backgroundSize: isVertical ? "20%" : "50%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  3: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -3px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(2deg) translate(-50%, 5px)",
          },
        ],
        orientation: [
          {
            width:
              orientation === 4
                ? length >= 13 && length <= 15
                  ? "80%"
                  : "65%"
                : length >= 13 && length <= 15
                ? "83%"
                : "70%",
            rotate: isVertical ? "0deg" : "4deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical
              ? "0px"
              : length >= 13 && length <= 15
              ? `-1px 1%`
              : `-1px -1%`,
            backgroundSize: isVertical ? "10%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "6%" : "35%",
        },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: "90%",
            rotate: isVertical ? "5deg" : "2deg",
            transform: "skew(5deg)",
            translate: `-6px -0.5px`,
            backgroundSize: isVertical ? "15%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "10%" : "35%",
        },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: isVertical ? "5deg" : "2deg",
            transform: "skew(5deg)",
            translate: `-4px -1px`,
            backgroundSize: isVertical ? "20%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(7deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "40%",
            rotate: "0deg",
            transform: "skew(0deg)",
            translate: isVertical ? "-10% 0px" : `-2px 0px`,
          },
          {
            backgroundSize: isVertical ? "20%" : "40%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? "-2% 0px" : `0px`,
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1.7px 0px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1.7px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "2deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  4: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -3px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(2deg) translate(-50%, 5px)",
          },
        ],
        orientation: [
          {
            width: length >= 13 && length <= 15 ? "83%" : "75%",
            rotate: isVertical ? "-1deg" : "2deg",
            transform: "skew(0deg)",
            translate: `-1px 0px`,
            backgroundSize: isVertical ? "10%" : "35%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "7%" : "30%",
        },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(3deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: "90%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-6.5px -1px`,
            backgroundSize: isVertical ? "15%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "20%" : "45%",
        },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-5px 0px`,
            backgroundSize: isVertical ? "20%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(5deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "5deg",
            transform: "skew(0deg)",
            translate: `-3px 1px`,
            backgroundSize: isVertical ? "22%" : "50%",
          },
          {
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            backgroundSize: isVertical ? "22%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 1px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 1px`,
              },
              {
                rotate: isVertical ? "0deg" : "2deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(10deg)",
                translate: `-1px 2px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 1px`,
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  5: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -5px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -3px) skewY(5deg)" }],
        design: [
          {
            height: "95%",
            width: "90%",
            transform: "rotate(2deg) translate(-50%, 5px)",
          },
        ],
        orientation: [
          {
            backgroundSize: isVertical ? "15%" : "35%",
            width: orientation === 4 ? "85%" : "90%",
            rotate: isVertical ? "-2deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(2deg)",
            translate: isVertical ? `-1% 0%` : "",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "10%" : "30%",
        },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            rotate: isVertical ? "3deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? `-11% 0%` : "-7% 0%",
            backgroundSize: isVertical ? "15%" : "37%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: {
          backgroundSize: isVertical ? "11%" : "30%",
        },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            width: orientation === 4 ? "95%" : "100%",
            rotate: "3deg",
            transform: "skew(3deg)",
            translate: `-5px 0px`,
            backgroundSize: isVertical ? "20%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(5deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "5deg",
            transform: "skew(0deg)",
            translate: `-3px .5px`,
            backgroundSize: isVertical ? "20%" : "45%",
          },
          {
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            backgroundSize: isVertical ? "20%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-18% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "23%" : "40%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: isVertical ? "-10% 0%" : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "23%" : "40%",
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: isVertical ? "-10% 0%" : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "23%" : "40%",
                rotate: isVertical ? "0deg" : "5deg",
                translate: isVertical ? "-5% 0%" : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "23%" : "40%",
                translate: isVertical ? "-5% 0%" : `-1px 0px`,
              },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "25%" : "40%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "40%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: isVertical ? "-10% 0%" : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "40%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { backgroundSize: isVertical ? "25%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  6: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -13px) skewY(3deg)" }]
            : [{ transform: "translate(-2px, -10px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(3deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "85%" : "90%",
            rotate: isVertical ? "-2deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(0deg)",
            translate: `-1px 0px`,
            backgroundSize: isVertical ? "15%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: { backgroundSize: isVertical ? "10%" : "40%" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-10% 0%`,
            backgroundSize: isVertical ? "15%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: { backgroundSize: isVertical ? "10%" : "40%" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: isVertical ? `-10% 0%` : "-10% 2%",
            backgroundSize: isVertical ? "20%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(5deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(0deg)",
            translate: `-3px 1px`,
            backgroundSize: isVertical ? "20%" : "40%",
          },
          {
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            backgroundSize: isVertical ? "20%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-2px 2px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-2px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "5deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  7: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -13px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -10px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(3deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "88%" : "95%",
            rotate: isVertical ? "-3deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(2deg)",
            translate: `-1px 0px`,
            backgroundSize: isVertical ? "12%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: { backgroundSize: isVertical ? "8%" : "40%" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? `-10% 0px` : "-8% 0%",
            backgroundSize: isVertical ? "18%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: { backgroundSize: isVertical ? "13%" : "40%" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: isVertical ? "-10% 0%" : `-10% 0%`,
            backgroundSize: isVertical ? "20%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(8deg)" },
          { translate: "-6px 14%" },
        ],
        design: [{ width: "85%", height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: "skew(0deg)",
            translate: `-2px 1.5px`,
            backgroundSize: isVertical ? "23%" : "45%",
          },
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            backgroundSize: isVertical ? "23%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-12% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "150%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1.5px 5px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                height: isVertical ? "150%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1.5px 2px`,
              },
              {
                height: isVertical ? "150%" : "100%",
                rotate: isVertical ? "0deg" : "5deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                height: isVertical ? "150%" : "100%",
                backgroundSize: isVertical ? "20%" : "40%",
              },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  8: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;

    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -10px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -7px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(5deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "83%" : "90%",
            rotate: isVertical ? "-5deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
            backgroundSize: isVertical ? "17%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
        straightDesignStyles: { backgroundSize: isVertical ? "12%" : "45%" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? `-10% 0px` : "-8%",
            backgroundSize: isVertical ? "17%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
        straightDesignStyles: { backgroundSize: isVertical ? "13%" : "40%" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            height: isVertical ? "110%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-4px 0px`,
            backgroundSize: isVertical ? "20%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-9%) skewY(10deg)" },
          { translate: "-3px 12%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-3px 3px`,
            backgroundSize: isVertical ? "20%" : "50%",
          },
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            backgroundSize: isVertical ? "20%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-2px 7px`,
                backgroundSize: isVertical ? "20%" : "50%",
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "50%",
                translate: `-2px 2px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "20%" : "50%",
              },
              {
                height: isVertical ? "120%" : "100%",
                backgroundSize: isVertical ? "20%" : "50%",
              },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 7px`,
                backgroundSize: isVertical ? "22%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "22%" : "40%",
                translate: `-1px 4px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "22%" : "40%",
                translate: `0px 2px`,
              },
              { backgroundSize: isVertical ? "22%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  9: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -10px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -7px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "-7deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
            backgroundSize: isVertical ? "15%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: isVertical ? `-10% 0px` : "-5% 0%",
            backgroundSize: isVertical ? "20%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: isVertical ? `-5px 0px` : "-5% 0%",
            backgroundSize: isVertical ? "20%" : "43%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(10deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            height: isVertical ? "110%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-3px 4px`,
            backgroundSize: isVertical ? "20%" : "40%",
          },
          {
            height: isVertical ? "110%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            backgroundSize: isVertical ? "20%" : "40%",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1.5px 8px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-2px 3px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                height: isVertical ? "120%" : "100%",
                backgroundSize: isVertical ? "20%" : "40%",
              },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 8px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 4px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-0px 2px`,
              },
              {
                height: isVertical ? "120%" : "100%",
                backgroundSize: isVertical ? "20%" : "40%",
              },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  10: (length, orientation) => {
    const isVertical = orientation == 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -10px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -7px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            height: isVertical ? "110%" : "100%",
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "-6deg" : "5deg",
            transform: isVertical ? "0deg" : "skew(5deg)",
            translate: `-1px 0px`,
            backgroundSize: isVertical ? "18%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: `-8% 0px`,
            backgroundSize: isVertical ? "25%" : "50%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "48%",
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-8% 0px`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(10deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            backgroundSize: isVertical ? "25%" : "45%",
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-8% 0px`,
          },
          {
            backgroundSize: isVertical ? "25%" : "45%",
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-10% 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-10% 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { backgroundSize: isVertical ? "25%" : "45%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-10% 0px`,
                backgroundSize: isVertical ? "20%" : "40%",
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-10% 0px`,
              },
              {
                rotate: isVertical ? "0deg" : "10deg",
                backgroundSize: isVertical ? "20%" : "40%",
                translate: `-1px 0px`,
              },
              { backgroundSize: isVertical ? "20%" : "40%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  11: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -14px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -10px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            backgroundSize: isVertical ? "15%" : "45%",
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "90%" : "100%",
            rotate: isVertical ? "-6deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(3deg)",
          },
        ],
        straightLabelStyles: { translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [{ height: "96%", width: "80%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "25%" : "50%",
            height: isVertical ? "120%" : "100%",
            rotate: "2deg",
            transform: "skew(2deg)",
            translate: isVertical ? "-8% 0px" : "-8%",
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(10deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? "-8% 0px" : "-5%",
            backgroundSize: isVertical ? "20%" : "45%",
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(10deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "45%",
            height: isVertical ? "120%" : "100%",
            width: orientation === 4 ? "95%" : "100%",
            rotate: isVertical ? "0deg" : "7deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: isVertical ? "-8% 0px" : "-10% 0%",
          },
          {
            backgroundSize: isVertical ? "20%" : "45%",
            height: isVertical ? "120%" : "100%",
            rotate: isVertical ? "0deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
                backgroundSize: isVertical ? "20%" : "45%",
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: isVertical ? "-10% 0px" : "",
                backgroundSize: isVertical ? "20%" : "45%",
              },
              {
                backgroundSize: isVertical ? "20%" : "45%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { backgroundSize: isVertical ? "20%" : "45%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                rotate: isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
                backgroundSize: isVertical ? "25%" : "45%",
              },
              {
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: isVertical ? "-10% 0px" : "",
                backgroundSize: isVertical ? "25%" : "45%",
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { backgroundSize: isVertical ? "25%" : "45%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
  12: (length, orientation) => {
    const isVertical = orientation === 1 || orientation === 2;
    if (length > 12)
      return {
        label:
          length >= 13 && length <= 15
            ? [{ transform: "translate(-2px, -14px) skewY(5deg)" }]
            : [{ transform: "translate(-2px, -9px) skewY(5deg)" }],
        design: [
          {
            height: "85%",
            width: "90%",
            transform: "rotate(7deg) translate(-50%, 15px)",
          },
        ],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "50%",
            width: orientation === 4 ? "85%" : "100%",
            height: isVertical ? "115%" : "100%",
            rotate: isVertical ? "-7deg" : "5deg",
            transform: isVertical ? "skew(0deg)" : "skew(5deg)",
            translate: `-1px 0px`,
          },
        ],
        straightLabelStyles: { backgroundSIze: "20%", translate: "-55% 0px" },
      };
    if (length >= 8)
      return {
        label: [{ transform: "translateY(-1%) skewY(5deg)" }],
        design: [
          {
            height: "96%",
            width: "80%",
          },
        ],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "50%",
            width: orientation === 4 ? "95%" : "100%",
            height: isVertical ? "115%" : "100%",
            rotate: isVertical ? "0deg" : "2deg",
            transform: isVertical ? "skew(3deg)" : "skew(5deg)",
            translate: isVertical ? "-10% 0px" : `-5% 2%`,
          },
        ],
        straightLabelStyles: { translate: "-20% 0px" },
      };
    else if (length >= 5)
      return {
        label: [{ transform: "translateY(-3%) skewY(5deg)" }],
        design: [{ height: "96%", width: "95%" }],
        orientation: [
          {
            backgroundSize: isVertical ? "20%" : "45%",
            width: orientation === 4 ? "95%" : "100%",
            height: isVertical ? "115%" : "100%",
            rotate: "5deg",
            transform: "skew(5deg)",
            translate: isVertical ? "-10% 0px" : `-5% 2%`,
          },
        ],
        straightLabelStyles: { translate: "-3px 0px" },
      };
    else if (length >= 3)
      return {
        label: [
          { transform: "translateY(-7%) skewY(20deg)" },
          { translate: "-3px 14%" },
        ],
        design: [{ height: "95%" }, {}],
        orientation: [
          {
            backgroundSize: isVertical ? "17%" : "45%",
            width: orientation === 4 ? "95%" : isVertical ? "110%" : "100%",
            rotate: isVertical ? "0deg" : "0deg",
            transform: isVertical ? "skew(0deg)" : "skew(0deg)",
            translate: isVertical ? "-10% 0px" : `-1px 3%`,
          },
          {
            backgroundSize: isVertical ? "17%" : "45%",
            width: orientation === 4 ? "95%" : isVertical ? "110%" : "100%",
            rotate: isVertical ? "0deg" : "3deg",
            transform: isVertical ? "skew(0deg)" : "skew(3deg)",
          },
        ],
        straightLabelStyles: { translate: "-10% 0px" },
      };
    else if (length <= 2)
      return length === 2
        ? {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 15%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "100%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(5deg)",
                translate: isVertical ? "-10% 0px" : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "10deg",
                transform: isVertical ? "skew(0deg)" : "skew(5deg)",
                translate: isVertical ? "-10% 0px" : `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "5deg",
              },
              { backgroundSize: isVertical ? "25%" : "45%" },
            ],
            straightLabelStyles: { translate: "-50% 0px" },
          }
        : {
            label: [
              { translate: "0px 5%" },
              { translate: "-4px 10%" },
              { translate: "-7px 12%" },
              { translate: "-10px 15%" },
            ],
            design: [
              { height: "90%" },
              { height: "95%" },
              { height: "100%" },
              { height: "100%" },
            ],
            orientation: [
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate:
                  orientation === 4 ? "25deg" : isVertical ? "0deg" : "20deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
                translate: `-1px 0px`,
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                translate: isVertical ? "-10% 0px" : `-1px 0px`,
                rotate: isVertical ? "0deg" : "15deg",
                transform: isVertical ? "skew(0deg)" : "skew(15deg)",
              },
              {
                backgroundSize: isVertical ? "25%" : "45%",
                rotate: isVertical ? "0deg" : "10deg",
              },
              { backgroundSize: isVertical ? "25%" : "45%" },
            ],
            straightLabelStyles: { translate: "-90% 0px" },
          };
  },
};
