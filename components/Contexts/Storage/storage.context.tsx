import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../../../types/contexts.types";
import { ThemeType } from "../Theme/theme.consts";

export interface Storage {
  saveData: (key: string, value: any) => void;
  retrieveData: () => Promise<string[] | undefined>;
  // setValue: Dispatch<React.SetStateAction<any>>
  // void;
  savedTheme: ThemeType | undefined;
}

const StorageProvider = createContext<Storage>({} as Storage);

export const Storage = ({ children }: Children) => {
  const [, setError] = useState(false);
  const [theme, setTheme] = useState<ThemeType>("pink");
  const handleError = () => {
    setTimeout(() => setError(true), 500);
  };

  const saveData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.warn("did it");
    } catch {
      handleError;
      console.warn(key, value);
    }
  };

  const retrieveData = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const json: string[] = await response.json();
      return json;
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    async () => {
      const retrievedTheme = await AsyncStorage.getItem("THEME");
      setTheme(retrievedTheme as ThemeType);
    };
  }, []);

  return (
    <StorageProvider.Provider
      value={{ saveData, retrieveData, savedTheme: theme }}
    >
      {children}
    </StorageProvider.Provider>
  );
};

export const useStorage = () => useContext(StorageProvider);
