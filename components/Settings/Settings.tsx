import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { useThemeContext } from "../Contexts/Theme/theme.context";
import s from "./Settings.styles";
import { ThemePicker } from "./ThemePicker/ThemePicker";

export const Settings: React.FC = () => {
  const navigation = useNavigation();
  const [showColourPicker, setShowColourPicker] = useState(false);
  return (
    <s.SettingsScreen>
      <s.Title>Settings</s.Title>
      <s.OptionContainer>
        <s.OptionText onPress={() => setShowColourPicker(!showColourPicker)}>
          Theme
        </s.OptionText>
        {showColourPicker && <ThemePicker />}
      </s.OptionContainer>
    </s.SettingsScreen>
  );
};
