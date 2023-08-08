import React from "react";
import { View, Text, Pressable } from "react-native";
import { useStorage } from "../Contexts/Storage/storage.context";

export const HabitLogger = () => {
  const { retrieveData } = useStorage();
  return (
    <View>
      <Text>Habit Logger</Text>
      <Pressable onPress={() => retrieveData()}>
        <Text>click to retrieve data</Text>
      </Pressable>
    </View>
  );
};
