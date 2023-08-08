import s from "./ToDoList.styles";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  Modal,
  Button,
  SafeAreaView,
  View,
} from "react-native";
import { Task } from "../../types/task.types";
import { TaskTicket } from "./TaskTicket/TaskTicket";
import ConfirmIcon from "../../assets/icons/Confirm";
import ClearIcon from "../../assets/icons/Clear";
import { useStorage } from "../Contexts/Storage/storage.context";

export const ToDoList = ({ navigation }) => {
  const { retrieveData } = useStorage();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newItemNo, setNewItemNo] = useState<number>(1);
  const [taskInput, setTaskInput] = useState<string>("");
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    retrieveData().then((todos) =>
      setTasks(
        todos?.map((todo, index) => ({
          id: Math.random().toString(),
          key: Math.random(),
          name: todo,
        })) || []
      )
    );
  }, []);
  const submitHandler = () => {
    if (taskInput.length > 0) {
      setTasks([
        ...tasks,
        {
          id: Math.random().toString(),
          key: newItemNo,
          name: taskInput,
        },
      ]);
      setNewItemNo(newItemNo + 1);
      setTaskInput("");
    } else {
    }
  };

  const clearHandler = () => {
    setTaskInput("");
  };

  const handleDelete = (list: Task[], id: string) => {
    const itemsLeft = list.filter((listItem) => {
      return listItem.id !== id;
    });
    setTasks(itemsLeft);
  };

  return (
    <s.Body>
      <s.ScreenTitle>To-Do List</s.ScreenTitle>
      <s.TaskInput
        value={taskInput}
        placeholder="Please enter task"
        onChangeText={(value: string) => setTaskInput(value)}
      />
      {taskInput.length > 0 && (
        <s.ButtonsContainer>
          <s.StyledButton
            onPress={submitHandler}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          >
            <ConfirmIcon />
          </s.StyledButton>
          <s.StyledButton
            onPress={clearHandler}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
          >
            <ClearIcon />
          </s.StyledButton>
        </s.ButtonsContainer>
      )}
      {tasks.length > 0 && (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={tasks}
          renderItem={({ item }) => {
            return (
              <TaskTicket
                task={item}
                handleDelete={handleDelete}
                list={tasks}
              />
            );
          }}
        />
      )}
      {completedTasks.length > 0 && (
        <View>
          <Text>Completed Tasks</Text>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={completedTasks}
            renderItem={({ item }) => {
              return (
                <TaskTicket
                  task={item}
                  handleDelete={handleDelete}
                  list={completedTasks}
                />
              );
            }}
          />
        </View>
      )}
    </s.Body>
  );
};
