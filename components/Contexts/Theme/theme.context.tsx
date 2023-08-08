import { createContext, useContext, useState } from "react";
import React from "react";
import { ThemeProvider } from "styled-components";
import { blue, brown, green, orange, pink, red, yellow } from "./theme";
import { Children } from "../../../types/contexts.types";
import { useStorage } from "../Storage/storage.context";
import { ThemeType } from "./theme.consts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Theme {
  theme: ThemeType;
  setTheme: (value: ThemeType) => void;
}

const ThemeContext = createContext<Theme>({} as Theme);

export const Theme = ({ children }: Children) => {
  // const { savedTheme } = useStorage();
  const savedTheme = async () => {
    try {
      return await AsyncStorage.getItem("THEME");
    } catch (e) {
      console.warn(e);
    }
  };
  console.warn(savedTheme);
  const [theme, setTheme] = useState<ThemeType>("pink");
  const chosenTheme = () => {
    switch (theme) {
      case "pink":
        return pink;
      case "blue":
        return blue;
      case "green":
        return green;
      case "yellow":
        return yellow;
      case "orange":
        return orange;
      case "red":
        return red;
      case "brown":
        return brown;
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={chosenTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
