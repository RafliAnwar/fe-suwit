import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

const SignupScreen = () => {
  const { onRegister, onLogin } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    const response = await onLogin(username, password);
    if (response && response.error) {
      alert(response.msg);
    } else {
      navigation.navigate("GameScreen");
    }
  };

  const handleRegister = async () => {
    const response = await onRegister(username, password);
    if (response && response.error) {
      alert(response.msg);
    } else {
      handleLogin();
    }
  };

  return (
    <ImageBackground
      source={require("../assets/Login.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#003f5c"
            value={name}
            onChangeText={setName}
          />
        </View> */}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            value={username}
            onChangeText={(text) => setUsername(String(text))}
          />
        </View>

        <View style={styles.passContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={(text) => setPassword(String(text))}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Text>{passwordVisible ? "Hide" : "Show"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // Centers the items vertically
    alignItems: "center", // Centers the items horizontally
  },
  container: {
    width: "100%",
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
  },
  inputContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    width: "70%",
    backgroundColor: "#0ec6dE",
  },
  input: {
    height: 30,
    fontSize: 16,
    color: "#000",
    paddingRight: 50,
  },
  passContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    padding: 10,
    width: "70%",
    backgroundColor: "#0ec6dE",
  },
  toggleButton: {
    position: "absolute",
    right: 15,
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#FFDB0A",
    borderRadius: 20,
    padding: 10,
    width: "40%",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  signUpBtn: {
    position: "absolute",
    bottom: 280,
    left: 240,
  },
  forgot: {
    textDecorationLine: "underline",
    color: "#0ec6dE",
  },
});

export default SignupScreen;
