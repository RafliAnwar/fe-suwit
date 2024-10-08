import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import PlayScreen from "./src/screens/PlayScreen";
import WinScreen from "./src/screens/WinScreen";
import LoseScreen from "./src/screens/LoseScreen";
import Splash from "./src/screens/Splash";
import GameScreen from "./src/screens/GameScreen";
import SignupScreen from "./src/screens/SignupScreen";
import Instruction from "./src/screens/Instruction";
import InstructionNext1 from "./src/screens/InstructionNext1";
import InstructionNext2 from "./src/screens/InstructionNext2";
import InstructionNext3 from "./src/screens/InstructionNext3";

import colors from "./src/theme/colors";

import { AuthProvider, useAuth } from "./src/context/AuthContext";

const Stack = createNativeStackNavigator();

function App() {
  const { authState } = useAuth();

  return (
    <AuthProvider>
      <NavigationContainer
        theme={{
          dark: false,
          colors: {
            background: colors.background,
            border: colors.border,
            card: colors.card,
            notification: colors.notification,
            primary: colors.primary,
            text: colors.text,
          },
        }}
      >
        <Stack.Navigator>
        <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
              headerShown: false,
            }}
          />
            
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PlayScreen"
            component={PlayScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WinScreen"
            component={WinScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoseScreen"
            component={LoseScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Instruction"
            component={Instruction}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InstructionNext1"
            component={InstructionNext1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InstructionNext2"
            component={InstructionNext2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="InstructionNext3"
            component={InstructionNext3}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;