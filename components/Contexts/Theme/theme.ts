interface ThemeStructure {
  BORDER_RADIUS: "20px";
}

export interface ColourTheme extends ThemeStructure {
  COLOUR_BACKGROUND_LIGHT: string;
  COLOUR_BACKGROUND_MEDIUM: string;
  COLOUR_BACKGROUND_DARK: string;
  COLOUR_MAIN_FONT: string;
  COLOUR_BACKGROUND_WHITE: string;
}

export const pink: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "pink",
  COLOUR_BACKGROUND_MEDIUM: "#e699b2",
  COLOUR_BACKGROUND_DARK: "#db7093",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};

export const blue: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "lightblue",
  COLOUR_BACKGROUND_MEDIUM: "#71a6d2",
  COLOUR_BACKGROUND_DARK: "#4682b4",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};

export const green: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "#ACE1AF",
  COLOUR_BACKGROUND_MEDIUM: "#74C365",
  COLOUR_BACKGROUND_DARK: "#355E3B",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};

export const yellow: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "#ffe135",
  COLOUR_BACKGROUND_MEDIUM: "#f5c71a",
  COLOUR_BACKGROUND_DARK: "#DAA520",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};

export const orange: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "#fbab60",
  COLOUR_BACKGROUND_MEDIUM: "#ff8c00",
  COLOUR_BACKGROUND_DARK: "#f94d00",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};

export const red: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "#ffb3b3",
  COLOUR_BACKGROUND_MEDIUM: "#cd1818",
  COLOUR_BACKGROUND_DARK: "darkred",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};

export const brown: ColourTheme = {
  COLOUR_BACKGROUND_LIGHT: "#f8cca0",
  COLOUR_BACKGROUND_MEDIUM: "#8e4d0b",
  COLOUR_BACKGROUND_DARK: "#5f3307",
  COLOUR_MAIN_FONT: "white",
  BORDER_RADIUS: "20px",
  COLOUR_BACKGROUND_WHITE: "white",
};
