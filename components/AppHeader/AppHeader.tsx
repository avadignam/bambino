import { useNavigation } from "@react-navigation/core";
import React from "react";
import HomeIcon from "../../assets/icons/Home";
import s from "./AppHeader.styles";

export const AppHeader = () => {
    const navigation = useNavigation();
  return (
    <s.AppHeader>
      <s.Padder />
      <s.Bambino>Bambino</s.Bambino>
      <s.HomeButton onPress={() => navigation.navigate("Home" as never)}>
        <HomeIcon />
      </s.HomeButton>
    </s.AppHeader>
  );
};
