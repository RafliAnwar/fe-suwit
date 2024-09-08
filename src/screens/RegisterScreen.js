import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const RegisterScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={[{ marginBottom: 10, fontSize: 20 }]}>Register Screen</Text>

            <View style={styles.emailContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.emailContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                />
            </View>

            <View style={styles.passContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={!passwordVisible}
                />
                <TouchableOpacity
                    style={styles.toggleButton}
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Text>
                        {passwordVisible ? "Hide" : "Show"}
                    </Text>
                </TouchableOpacity>
            </View>
            {/* forgot password */}
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D2E0FB',
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        width: "70%",
        backgroundColor: "#fff",
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
        backgroundColor: "#fff",
    },
    emailInput: {
        flex: 1,
        height: 30,
        fontSize: 16,
        color: '#000',
        paddingRight: 50,
    },
    passwordInput: {
        flex: 1,
        height: 30,
        fontSize: 16,
        color: '#000',
        paddingRight: 50,
    },
    toggleButton: {
        position: 'absolute',
        right: 15,
        justifyContent: 'center',
    },
    loginBtn: {
        backgroundColor: '#2196F3',
        borderRadius: 20,
        padding: 10,
        width: "40%",
        alignItems: 'center',
        marginTop: 20,
    }
};

export default RegisterScreen;
