import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAuth, AuthProvider } from "./src/context/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import colors from "./src/theme/colors";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
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
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
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
