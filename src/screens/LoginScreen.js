import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const { onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handleLogin = async () => {
    const response = await onLogin(username, password);
    if (response && response.error) {
      alert(`username or password is incorrect!`);
    } else {
      navigation.navigate("GameScreen");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/loginBaru.png")}
      style={styles.background}
    >
      {/* <View>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                />
            </View> */}
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.emailInput}
          placeholder="username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(String(text))}
        />
      </View>

      <View style={styles.passContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={!passwordVisible}
          onChangeText={(text) => setPassword(String(text))}
        />
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Text>{passwordVisible ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* sign up */}
      <View style={styles.signup}>
        <Text style={{}}>Don't have account?</Text>
        <TouchableOpacity
          style={[{}]}
          onPress={() => {
            navigation.navigate("SignupScreen", {});
          }}
        >
          <Text style={styles.forgot}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = {
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  signup: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 'bold'
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 410,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    width: "70%",
    backgroundColor: "#C2E7FF",
    alignSelf: 'center',
  },
  passContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    width: "70%",
    backgroundColor: "#C2E7FF",
    alignSelf: 'center',
  },
  emailInput: {
    flex: 1,
    height: 30,
    fontSize: 16,
    color: "#000",
    paddingRight: 50,
  },
  passwordInput: {
    flex: 1,
    height: 30,
    fontSize: 16,
    color: "#000",
    paddingRight: 50,
  },
  toggleButton: {
    position: "absolute",
    right: 15,
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#FFDB0A",
    borderRadius: 10,
    padding: 10,
    width: "70%",
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    alignSelf: "center",
  },

  loginText: {
    fontWeight: 'bold',
},

  forgot: {
    textDecorationLine: "underline",
    color: "#0ec6dE",
  },
};

export default LoginScreen;
