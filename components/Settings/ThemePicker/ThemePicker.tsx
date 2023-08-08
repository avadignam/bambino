import React from "react";
import s from "./ThemePicker.styles";
import Grid from "react-native-grid-component";
import { ThemeType } from "../../Contexts/Theme/theme.consts";
import { useThemeContext } from "../../Contexts/Theme/theme.context";
import { useStorage } from "../../Contexts/Storage/storage.context";

export const ThemePicker: React.FC = () => {
  const { setTheme } = useThemeContext();
  const { saveData } = useStorage();
  interface ThemeStuff {
    title: ThemeType;
    primaryColour: string;
  }
  const ThemeData = [
    {
      title: "blue",
      primaryColour: "#4682b4",
    },
    {
      title: "pink",
      primaryColour: "#db7093",
    },
    {
      title: "green",
      primaryColour: "#355E3B",
    },
    {
      title: "yellow",
      primaryColour: "#DAA520",
    },
    {
      title: "orange",
      primaryColour: "#f94d00",
    },
    {
      title: "red",
      primaryColour: "#cc0000",
    },
    {
      title: "brown",
      primaryColour: "#5f3307",
    },
  ];

  const changeTheme = (themeName: ThemeType) => {
    setTheme(themeName);
    saveData("THEME", themeName);
  };

  const renderItem = (data: ThemeStuff) => {
    return (
      <s.ColourButton
        onPress={() => changeTheme(data.title)}
        primaryColour={data.primaryColour}
      />
    );
  };
  return (
    <s.ThemePickerWrapper>
      <Grid data={ThemeData} numColumns={6} renderItem={renderItem} />
    </s.ThemePickerWrapper>
  );
};
