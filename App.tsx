import React from "react";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { Settings } from "./components/Settings/Settings";
import { HabitLogger } from "./components/HabitLogger/HabitLogger";
import { Theme } from "./components/Contexts/Theme/theme.context";
import s from "./App.styles";
import { Storage } from "./components/Contexts/Storage/storage.context";

const stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Storage>
        <Theme>
          <s.AppContainer>
            <AppHeader />
            <stack.Navigator screenOptions={{ headerShown: false }}>
              <stack.Screen name="Home" component={HomeScreen} />
              <stack.Screen name="To-Do" component={ToDoList} />
              <stack.Screen name="Settings" component={Settings} />
              <stack.Screen name="Habit Logger" component={HabitLogger} />
            </stack.Navigator>
          </s.AppContainer>
        </Theme>
      </Storage>
    </NavigationContainer>
  );
};

export default App;
