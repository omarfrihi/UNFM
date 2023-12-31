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
    grey: {
      100: "#666",
      200: "#333",
      300: "#121312",
      400: "#363636",
      500: "#d3d3d3",
    },
    green: { 100: "#409F6E", 200: "#31DC84", 300: "#249c5e" },
    blue: { 100: "#144056", 200: "#023047", 300: "#002D83" },
  },
  fonts: {
    TAJAWAL: "Tajawal",
    GILROY: "Gilroy",
    POPPINS: "Poppins",
  },
  // responsive,
};
