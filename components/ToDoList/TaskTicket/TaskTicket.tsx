import CheckBox from "@react-native-community/checkbox";
import React from "react";
import { View } from "react-native";
import { DeleteIcon } from "../../../assets/icons/Delete";
import s from "./TaskTicket.styles";
import { Task } from "../../../types/task.types";

interface Props {
  task: Task;
  handleDelete: (list: Task[], id: string) => void;
  list: Task[];
}

export const TaskTicket = ({ task, handleDelete, list }) => {
  return (
    <View>
      <s.ListElementContainer>
        <CheckBox
          boxType="square"
          onAnimationType="bounce"
          offAnimationType="bounce"
          onCheckColor="white"
          onTintColor="white"
        />
        <s.ItemContent>
          <s.Item>{task.name}</s.Item>
          <s.DeleteButton onPress={() => handleDelete(list, task.id)}>
            <DeleteIcon />
          </s.DeleteButton>
        </s.ItemContent>
      </s.ListElementContainer>
    </View>
  );
};
