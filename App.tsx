import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { View } from "react-native";
import { NativeBaseProvider, Box, Center, Text } from "native-base";

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NativeBaseProvider>
      <Center>
        <Text>Hello world</Text>
      </Center>
    </NativeBaseProvider>
  );
}
