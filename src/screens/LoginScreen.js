import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.screen}>
            <Text style={[{ marginBottom: 10, fontSize: 20 }]}>Login Screen</Text>

            <View style={styles.emailContainer}>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
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

            <TouchableOpacity
                style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>

            {/* sign up */}
            <TouchableOpacity style={[{
                position: 'absolute',
                bottom: 30
            }]}
                onPress={() => {
                    navigation.navigate('RegisterScreen', {
                    })
                }}
            >
                <Text style={styles.forgot}>Sign Up</Text>
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
        position: 'relative',
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
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
};

export default LoginScreen;
