import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import {
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

const LoginScreen = () => {
  const { onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/LoginBg.png")}
        style={styles.background}
      >
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={(text) => setUsername(String(text))}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              value={username}
              secureTextEntry={!passwordVisible}
              onChangeText={(text) => setUsername(String(text))}
            />
          </View>
          <View style={styles.loginButton}>
            <Button title="Login" color="primary" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignContent: "center",
    justifyContent: "space-around"
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    backgroundColor: "#C2E7FF",
    marginBottom: 10,
  },
  loginButton: {
    alignSelf: "center",
    backgroundColor: "#007BFF",
    borderRadius: 8,
    marginTop: 10,
    width: "50%",
  },
});

export default LoginScreen;
