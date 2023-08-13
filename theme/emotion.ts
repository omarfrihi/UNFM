import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      [key in string]: {
        [key in number]: string;
      };
    };

    fonts: { [key in string]: string };
  }
}

export const theme = {
  colors: {
    white: {
      100: "#FAFAFA",
      200: "#FFFFFF",
      300: "#cfcbca",
    },
    grey: { 100: "#666" },
    green: { 100: "#409F6E", 200: "#31DC84" },
  },
  fonts: {
    TAJAWAL: "Tajawal",
    GILROY: "Gilroy",
    POPPINS: "Poppins",
  },
  // responsive,
};
