import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            // Login berhasil
            Alert.alert('Login Success', 'You have successfully logged in!');
            navigation.navigate('GameScreen'); // Navigasi ke GameScreen setelah login berhasil
        } else {
            // Login gagal
            Alert.alert('Login Failed', 'Username or password is incorrect.');
        }
    };

    return (
        <ImageBackground
            source={require('../assets/Login.png')}
            style={styles.background}
        >
            <View>
                <TextInput
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                />
            </View>
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
                style={styles.loginBtn}
                onPress={() => {
                    navigation.navigate('GameScreen', {
                    })
                }}
            >
                <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>

            {/* sign up */}
            <View style={styles.signup}>
                <Text style={{}}>Don't have account?</Text>
                <TouchableOpacity style={[{
                }]}
                    onPress={() => {
                        navigation.navigate('RegisterScreen', {
                        })
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    // screen: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#D2E0FB',
    //     position: 'relative',
    // },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 400,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        width: "70%",
        backgroundColor: "#0ec6dE",
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
        backgroundColor: "#0ec6dE",
        alignSelf: 'center',
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
        backgroundColor: '#FFDB0A',
        borderRadius: 20,
        padding: 10,
        width: "40%",
        alignItems: 'center',
        marginTop: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignSelf: 'center',
    },

    forgot: {
        textDecorationLine: 'underline',
        color: '#0ec6dE'
    },
};

export default LoginScreen;
