import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (
        <ImageBackground 
            source={require('../assets/Login.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#003f5c"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.passContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={!passwordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Text>
                            {passwordVisible ? "Hide" : "Show"}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.loginBtn}
                    onPress={() => {
                        navigation.navigate('GameScreen', {
                            name,
                            email,
                            password,
                        });
                    }}
                >
                    <Text style={styles.loginText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signUpBtn}
                    onPress={() => {
                        navigation.navigate('GameScreen');
                    }}
                >
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: 'center', // Centers the items vertically
        alignItems: 'center', // Centers the items horizontally
    },
    container: {
        width: "100%", 
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
    },
    inputContainer: {
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 20,
        padding: 10,
        width: "70%",
        backgroundColor: "#0ec6dE",
    },
    input: {
        height: 30,
        fontSize: 16,
        color: '#000',
        paddingRight: 50,
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
    },
    signUpBtn: {
        position: 'absolute',
        bottom: 280,
        left: 240,
    },
    forgot: {
        textDecorationLine: 'underline',
        color: '#0ec6dE',
    },
});

export default SignupScreen;
