export interface ThemeConfig {
  [name: string]: { title: ThemeType; primaryColour: string };
}

export type ThemeType =
  | "pink"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "brown";

export const Themes: ThemeConfig = {
  blue: {
    title: "blue",
    primaryColour: "#4682b4",
  },
  pink: {
    title: "pink",
    primaryColour: "#db7093",
  },
  green: {
    title: "green",
    primaryColour: "#355E3B",
  },
  yellow: {
    title: "yellow",
    primaryColour: "#DAA520",
  },
};
