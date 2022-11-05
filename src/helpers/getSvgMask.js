const coordinates = {
  1: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 12.7414V1C1 1 11.5 6.78659 39 7.874C70 9.0998 83 7.874 83 7.874V18.8233C83 18.8233 61.0056 20.6012 39 19.7862C13 18.8233 1 12.7414 1 12.7414Z",
        ],
        addStyles: [{ transform: "translate(-2px, -9px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 12.5V1.5C4.97405 3.08962 10.9135 4.81027 18 6.15611V17.9082C10.4992 16.2067 4.95252 14.1939 1 12.5Z",
          "M18 2.49989V14.9999C11.5536 14.491 5.91294 13.6942 1 12.7464V0.854004C6.26722 1.69334 12.0292 2.30086 18 2.49989Z",
          "M1 1.03125V13.4399C6.7331 13.6221 13.3076 13.6226 20 13.5314V1.35424C13.3227 1.37745 6.93587 1.3001 1 1.03125Z",
          "M20 12.9737V1.03125C13.5337 1.15328 7.1603 1.27531 1 1.3293V13.4669C7.58648 13.3452 14.1479 13.1524 20 12.9737Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -4px)" },
          { transform: "translate(-10px, -2px)" },
          { transform: "translate(-13px, -2px)" },
        ],
      };
    else if (length < 5)
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
        addStyles: [{ transform: "translate(-2px, -9px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 21V1.5C6.06656 3.2733 11.6465 4.91824 18 6.23975V28.1762C11.1215 26.1132 5.55764 23.4129 1 21Z",
          "M18.0002 3V25.5C11.6178 25.3176 5.96696 24.4702 0.950684 23.2488V1C6.10224 1.91255 11.7456 2.60909 18.0002 3Z",
          "M1 1.18164L1 23.6589C6.7331 23.9786 13.3076 24.0512 20 23.969L20 1.97828C13.3227 1.90135 6.93587 1.65354 1 1.18164Z",
          "M20 22.1818L20 0.678711C13.5337 0.892908 7.1603 1.01477 1 1.00448L1 22.9024C7.58648 22.7648 14.1479 22.4956 20 22.1818Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -9px)" },
          { transform: "translate(-6px, -4px)" },
          { transform: "translate(-9px, -2px)" },
          { transform: "translate(-12px, -1px)" },
        ],
      };
    else if (length < 5)
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
        addStyles: [{ transform: "translate(-2px, -10px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 29.5V1C6.0165 2.50495 11.6621 4.0435 18 5.34901V35.8308C11.3349 34.1696 5.69185 32.1066 1 29.5Z",
          "M18 3.28862V34.5002C11.7725 33.7454 6.11479 32.8481 1 31.7546V1.12305C6.2188 2.06698 11.8752 2.83228 18 3.28862Z",
          "M1 0.960449L1 32.4604C6.7331 32.9155 13.3076 33.2671 20 33.4186L20 1.75133C13.1974 1.68386 6.75385 1.43622 1 0.960449Z",
          "M20 32.9606L20 1.39551C13.5886 1.63373 7.17716 1.77013 1 1.77075L1 33.4847C7.58648 33.5516 14.1479 33.4073 20 32.9606Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -9px)" },
          { transform: "translate(-5px, -4px)" },
          { transform: "translate(-9px, -2px)" },
          { transform: "translate(-13px, -2px)" },
        ],
      };
    else if (length < 5)
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
        addStyles: [{ transform: "translate(-2px, -8px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 36.5V1C6.0909 2.41852 11.6933 3.78401 18 4.94516V45.7454C11.2196 43.4274 5.52111 40.311 1 36.5Z",
          "M18 2.64704V45C11.8138 44.4376 6.13557 43.4199 1 41.9846V0.637207C6.17846 1.47623 11.8142 2.17047 18 2.64704Z",
          "M1 0.957031L1 43.23C6.78235 43.6036 13.3137 43.7385 20 43.7262L20 1.53706C13.1981 1.48817 6.70369 1.34088 1 0.957031Z",
          "M20 42.2298L20 0.524902C13.7324 0.524902 7.27789 0.569652 1 0.555245L1 42.7019C7.47584 42.6371 13.986 42.4525 20 42.2298Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -9px)" },
          { transform: "translate(-5px, -4px)" },
          { transform: "translate(-9px, -2px)" },
          { transform: "translate(-12px, -1px)" },
        ],
      };
    else if (length < 5)
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
        addStyles: [{ transform: "translate(-2px, -10px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 45V1C5.94944 2.7323 11.8888 4.18258 18 5.30122V55.7106C11.2528 53.1796 5.44325 49.7046 1 45Z",
          "M17.5 3.00011V55.5001C11.663 54.7469 6.10956 53.6392 1 52.0702V0.977539C6.03434 1.76508 11.5054 2.41999 17.5 3.00011Z",
          "M1 0.973145L1 53.5568C6.7331 54.0154 13.3076 54.2003 20 54.2178L20 1.72757C13.1981 1.6485 6.70369 1.44845 1 0.973145Z",
          "M20 52.7555L20 0.754883C13.7324 0.754883 7.27789 0.795692 1 0.761268L1 53.2094C7.58648 53.1654 14.1479 52.9806 20 52.7555Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -5px)" },
          { transform: "translate(-9px, -3px)" },
          { transform: "translate(-12px, -2px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 45V1C11 4.5 23 6.5 38.5 8V60.5C23 58.5 9.5 54 1 45Z",
          "M43 54V1.99936C28.5 1.99936 13 2.21777 1 1.21777V53.8014C13.5 54.8014 30 54.5 43 54Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -10px)" },
          { transform: "translate(-5px, -3px)" },
        ],
      };
  },

  6: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 53.4226V1C1 1 15.7473 6.89421 32.5 8.27108C60.7151 10.59 83 10.4096 83 10.4096V71.8835C83 71.8835 45.086 72.8508 30.0968 69.211C10.6989 64.5007 1 53.4226 1 53.4226Z",
        ],
        addStyles: [{ transform: "translate(-2px, -11px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 53.5V1C6.07607 3.13729 11.4376 4.84633 18 6.27967V65.5352C11.1049 62.5454 5.21835 58.5093 1 53.5Z",
          "M17.5 3.50021V65.0002C11.7128 64.2535 6.13475 62.9491 1 61.1132V1.09131C5.77576 1.99083 11.1816 2.77811 17.5 3.50021Z",
          "M1 1.50244L1 63.5024C6.66905 64.2111 13.2308 64.4733 20 64.5001L20 2.73208C13.1981 2.58949 6.70369 2.2154 1 1.50244Z",
          "M19.5 63.0024L20 1.50244C13.7324 1.71857 7.27789 1.84127 1 1.78979L1 63.4903C7.28305 63.4374 13.628 63.2199 19.5 63.0024Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -11px)" },
          { transform: "translate(-5px, -6px)" },
          { transform: "translate(-9px, -4px)" },
          { transform: "translate(-12px, -3px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 53.5V1C10.5 5 21 7.5 38.5 9.5V71C23 69 9 63 1 53.5Z",
          "M42.5 64L43 2.5C28.5 3 13 3 1 1.5V63.5C13 65 29 64.5 42.5 64Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -11px)" },
          { transform: "translate(-5px, -4px)" },
        ],
      };
  },

  7: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 62.2827V1C1 1 15.7473 7.89042 32.5 9.5C60.7151 12.2109 83 12 83 12V83.8638C83 83.8638 45.086 84.9947 30.0968 80.7397C10.6989 75.2332 1 62.2827 1 62.2827Z",
        ],
        addStyles: [{ transform: "translate(-2px, -13px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 62.1992V1C6.07607 3.40445 11.4376 5.47138 18 7.18009V76.1887C11.1049 72.7821 5.21835 68.158 1 62.1992Z",
          "M17.5 3.81783V75.5001C11.7128 74.5667 6.13475 73.0756 1 70.9853V1.14258C5.77576 2.20186 11.1816 3.09574 17.5 3.81783Z",
          "M0.999996 0.711426L1.5 72.7114C7.04314 73.5333 13.4398 73.916 20 73.9912L20 1.85786C12.9398 1.69577 6.37336 1.32374 0.999996 0.711426Z",
          "M19.5 72.2115L20 0.711426C13.6948 0.92163 7.21294 0.99992 1 0.926955L1 73.0003C7.34956 72.9581 13.7212 72.656 19.5 72.2115Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -13px)" },
          { transform: "translate(-5px, -7px)" },
          { transform: "translate(-9px, -3px)" },
          { transform: "translate(-12px, -2px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 62.1992V1C10.5 5.5 21 8.81776 38.5 10.8178V82.5C23 80 9 73.5 1 62.1992Z",
          "M42.5 73.5L43 1.99993C28 2.5 12 2.25349 0.999996 1L1.5 73C13.5 74.7793 29.5 74.5 42.5 73.5Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -13px)" },
          { transform: "translate(-5px, -3px)" },
        ],
      };
  },

  8: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 71V1C1 1 15.7473 8.17232 32.5 9.99522C60.7151 13.0654 83 12.3914 83 12.3914V94.8457C83 94.8457 45.086 96.1265 30.0968 91.3076C10.6989 85.0713 1 71 1 71Z",
        ],
        addStyles: [{ transform: "translate(-2px, -14px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 71.5V1C5.42602 3.76626 10.9233 6.07339 18 8.00606V86.4839C10.9245 82.6933 5.02582 77.6729 1 71.5Z",
          "M17.5 4.00005V85.5001C11.6607 84.4052 6.08778 82.7109 1 80.4416V1.01904C5.80231 2.14675 11.2607 3.13348 17.5 4.00005Z",
          "M0.999996 1L0.999996 82.4748C6.80491 83.3302 13.1948 83.7719 20 83.9302L20 2.33648C12.9398 2.0876 6.37336 1.60858 0.999996 1Z",
          "M20 82.6281L20 1.24609C13.6948 1.54154 7.21294 1.58861 1 1.45138L1 82.9915C7.07933 83.0383 13.4504 82.8881 20 82.6281Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -15px)" },
          { transform: "translate(-5px, -7px)" },
          { transform: "translate(-9px, -4px)" },
          { transform: "translate(-12px, -3px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 72V1.5C9 6.5 20.5 10 38.5 12.5V94C22.5 91 8.5 83.5 1 72Z",
          "M43 83.881V2C28 2.70718 12 2 0.999996 0.746509V82.7209C13 84.5002 27.5 84.5002 43 83.881Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -15px)" },
          { transform: "translate(-5px, -3px)" },
        ],
      };
  },

  9: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 82.1731V1C1 1 17.2473 10.4735 34 12.5C62.2151 15.9131 83 15.1638 83 15.1638V106.828C83 106.828 45.086 108.252 30.0968 102.895C10.6989 95.9623 1 82.1731 1 82.1731Z",
        ],
        addStyles: [{ transform: "translate(-2px, -16px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 81.5V1.5C6.56672 4.68098 11.7118 7.15929 18 9.30744V97.869C10.7712 93.6079 4.78765 87.9931 1 81.5Z",
          "M17.5 5.49976V96.4998C11.7086 95.4139 6.11379 93.5419 1 91.0261V1.58252C5.65344 2.9672 10.9877 4.23348 17.5 5.49976Z",
          "M0.999996 0.844727L0.999996 92.2056C6.16301 93.1782 13.0393 93.7086 20 93.9074L20 2.23101C13.8064 2.01277 7.66748 1.53447 0.999996 0.844727Z",
          "M20 92.3447L20 0.844727C13.1565 1.28624 6.99533 1.43535 1 1.3351L1 92.9859C8.18093 93.0644 15.1175 92.8097 20 92.3447Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -15px)" },
          { transform: "translate(-5px, -8px)" },
          { transform: "translate(-9px, -4px)" },
          { transform: "translate(-12px, -3px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 81.5V1.5C11.5 7.5 20.5 11 38.5 14.5V105.5C22.5 102.5 8 93.5 1 81.5Z",
          "M43 93.5V2C27.5 3 15.5 2.5 0.999996 1V92.3609C12.5 94.5271 32.5 94.5 43 93.5Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -17px)" },
          { transform: "translate(-5px, -4px)" },
        ],
      };
  },

  10: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 91.5967V2C1 2 13.9462 11.8666 31.5161 14.1034C61.1075 17.8707 87 17.6336 87 17.6336V118.811C87 118.811 47.2366 120.382 31.5161 114.469C11.172 106.817 1 91.5967 1 91.5967Z",
        ],
        addStyles: [{ transform: "translate(-2px, -18px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 1V90.5C4.53655 96.4849 10.5893 102.322 17.9504 106.851C17.5 107.5 17.9339 42.5642 17.9504 10.4359C11.5752 8.13234 7.14614 5.19055 1 1Z",
          "M17.5 3.99993V103.801C11.7554 102.795 6.13968 100.797 1 98.1397V0.735352C5.3124 1.96238 10.5597 3.00846 17.5 3.99993Z",
          "M0.999996 0.571289L0.999996 100.822C6.80491 102.031 13.1948 102.831 20 103.221L20 1.78625C13.8064 1.63361 7.66748 1.26103 0.999996 0.571289Z",
          "M20 102.071L20 0.571289C13.1565 0.792046 6.99533 0.915336 1 0.855092L1 102.402C7.07933 102.604 13.4504 102.494 20 102.071Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -17px)" },
          { transform: "translate(-5px, -7px)" },
          { transform: "translate(-9px, -4px)" },
          { transform: "translate(-12px, -3px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 90.5V1C12 8.5 17.5 12 38.5 15V114.801C22.5 112 7.5 101.5 1 90.5Z",
          "M43 104V2.5C27.5 3 15.5 3 0.999996 1.5V101.75C13 104.25 27.5 105 43 104Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -17px)" },
          { transform: "translate(-5px, -3px)" },
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
    else if (length <= 2)
      return {
        path: [
          "M1 97.5V2C5.75611 6.05655 10.5122 9.57811 18 12.5796V115.635C12.2592 111.286 6.93543 105.375 1 97.5Z",
          "M17 5.00013V111.5C10.9129 110.25 5.75119 108.273 1 105.368V1.04248C5.36422 2.49817 10.5734 3.8167 17 5.00013Z",
          "M0.999996 1.5L0.999996 108.5C6.16408 110.307 12.6069 111.448 20 112.129L20 3.03022C12.7119 2.75953 5.99358 2.22937 0.999996 1.5Z",
          "M20 111L20 0.978027C13.8744 1.2535 7.30799 1.299 1 1.15099L1 110.447C6.86599 110.846 13.2474 111 20 111Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -19px)" },
          { transform: "translate(-5px, -7px)" },
          { transform: "translate(-9px, -3px)" },
          { transform: "translate(-12px, -2px)" },
        ],
      };
    else if (length < 5)
      return {
        path: [
          "M1 97.5V2C9 8.82331 17 14.133 38 18V124.5C22.5 121.316 13 113.421 1 97.5Z",
          "M43 113V2.47822C28.3253 3.13815 11.1205 2.47822 0.999996 1V107.5C10.1084 110.102 25.7952 113 43 113Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -20px)" },
          { transform: "translate(-5px, -3px)" },
        ],
      };
  },
  12: (length) => {
    if (length >= 5)
      return {
        path: [
          "M1 108.5V1.5C1 1.5 13.9462 11.2951 31.5161 13.9664C61.1075 18.4654 87 18 87 18V141C87 141 47.2366 142.877 31.5161 135.815C11.172 126.676 1 108.5 1 108.5Z",
        ],
        addStyles: [{ transform: "translate(-2px, -20px)" }],
      };
    else if (length <= 2)
      return {
        path: [
          "M1 107.5V2C5.50139 6.22005 10.0028 9.72758 16.82 12.7455V125.461C11.5234 121.287 6.52684 115.56 1 107.5Z",
          "M18 6V122C11.4833 120.528 6.02722 118.527 1 115.4V1.42432C5.56382 3.08809 11.0751 4.59836 18 6Z",
          "M1 0.848389L1 117.303C5.76106 118.8 12.3411 120.216 20 121.218L20 2.522C12.7115 2.23046 5.98575 1.65005 1 0.848389",
          "M19.5 121.674L19.5 1.4563C13.5359 1.75155 7.1489 1.80392 1 1.65137L1 120.692C6.76464 121.305 13.0235 121.674 19.5 121.674Z",
        ],
        addStyles: [
          { transform: "translate(-2px, -21px)" },
          { transform: "translate(-6px, -9px)" },
          { transform: "scaleY(1.02) translate(-9px, -3px)" },
          { transform: "scaleY(1.02) translate(-12px, -2px)" },
        ],
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
  let labelLength;
  let labelWidth;

  // width
  if (!width) {
    // if there is not width but there is a length make it a square by assigning it the value of the length
    if (labelLength && labelLength <= 12) {
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

  //length = length > 0 && length <= 17 ? length : 12; // 12 is the default length
  //width = width > 0 && width <= 12 ? width : 12; // 12 is the default width
  console.log(labelLength, labelWidth);
  const index = coordinates[labelWidth](labelLength);

  let mask = {
    path: index.path,
    addStyles: index.addStyles,
  };

  //console.log("length", length);
  // add width here rather than in obj for cleaner syntax
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
  //console.log("mask", mask);
  return mask;
};
