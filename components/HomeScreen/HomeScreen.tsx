import React from "react";
import s from "./HomeScreen.styles";
import Grid from "react-native-grid-component";
import { useNavigation } from "@react-navigation/core";
import ToDoIcon from "../../assets/icons/ToDoIcon";
import SettingsIcon from "../../assets/icons/Settings";
import ThumbsUpIcon from "../../assets/icons/ThumbsUp";
import ConfirmIcon from "../../assets/icons/Confirm";

export const HomeScreen: React.FC = () => {
  interface ButtonStuff {
    name: string;
    icon: JSX.Element;
    screen: string;
  }

  const navigation = useNavigation();

  const ButtonData = [
    { name: "To-Do List", icon: <ToDoIcon />, screen: "To-Do" },
    { name: "Habit Logger", icon: <ThumbsUpIcon />, screen: "Habit Logger" },
    { name: "Blah", icon: <ConfirmIcon /> },
    { name: "Settings", icon: <SettingsIcon />, screen: "Settings" },
  ];

  const renderItem = (data: ButtonStuff) => {
    return (
      <s.Icon onPress={() => navigation.navigate(data.screen as never)}>
        {data.icon}
        <s.IconName>{data.name}</s.IconName>
      </s.Icon>
    );
  };

  return (
    <s.HomeScreenContainer>
      <s.Skeleton source={require("../../assets/skeleton.png")} />
      <Grid data={ButtonData} numColumns={2} renderItem={renderItem} />
    </s.HomeScreenContainer>
  );
};
