import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TextInput as PaperTextInput, Button as NativeButton, Title } from 'react-native-paper';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../../redux2/Action/action';


const LoginScreen = () => {
    const [loginSuccessMessage, setLoginSuccessMessage] = useState('');
    const [username, setUsername] = useState(''); // State to store username input
    const [password, setPassword] = useState(''); // State to store password input
    const navigation = useNavigation();
    const users = useSelector((state) => state.auth.users);
    console.log("Initial users state", users);
    const dispatch = useDispatch();

    const handleSignupbtn = () => {
        navigation.navigate('SignUp');
    };



    const handleLogin = async () => {
        try {
            // Simulating login success, you should replace this with your actual login logic
            const user = { username, password };

            // Simulate checking username and password (replace this with your authentication logic)
            const isValidUser = users.some((u) => u.username === user.username && u.password === user.password);

            if (isValidUser) {
                // Dispatch success action
                dispatch(loginSuccess(user));
                setLoginSuccessMessage('Login successful!');
                // Navigate to MainHome screen
                navigation.navigate("MainScreen");
            } else {
                setLoginSuccessMessage('Invalid username or password');
            }
        } catch (error) {
            // Handle login failure, dispatch a failure action, show an error message, etc.
            dispatch(loginFailure(error.message));
            console.error('Login failed:', error.message);
        }
    };






    return (
        <View style={{ flex: 1 }}>

            <React.Fragment>
                <View style={styles.innerContainer}>
                    <View style={styles.whiteBox}></View>
                </View>

                {/* LOgin Contente */}

                <View style={styles.logintitle}>
                    <Text style={styles.loginHeaderText}>Login here</Text>
                    <Text style={styles.welcomeText}>
                        Welcome back you’ve{'\n'}been missed!
                    </Text>
                </View>

                {/* Form Input field */}

                <View
                    style={{
                        flex: 1,
                        padding: 10,
                        alignItems: 'center',
                        gap: 10,
                        justifyContent: 'flex-start',
                        height: '100%',
                    }}>
                    <View style={styles.inputContainer}>
                        <PaperTextInput
                            label="Email"
                            style={styles.input}
                            placeholderTextColor="#626262"
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <PaperTextInput
                            label="Password"
                            style={styles.input}
                            placeholderTextColor="#626262"
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </View>

                    <View
                        style={{
                            width: '90%',
                            alignItems: 'flex-end',
                            justifyContent: 'flex-end',
                        }}>
                        <TouchableOpacity>
                            <Text style={styles.forgotPasswordText}>
                                Forgot your password?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.signInButton} onPress={handleLogin} >
                        <Text style={styles.signInButtonText}>
                            Sign in
                        </Text>
                    </TouchableOpacity>

                    {/* Create New account button  */}
                    <View
                        style={{
                            width: '90%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '10%',
                        }}>
                        <TouchableOpacity onPress={handleSignupbtn}>
                            <Text style={styles.CreatAccount}>Create New Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Social Meidia BUttons  */}

                <Text style={styles.loginSuccessMessage}>{loginSuccessMessage}</Text>
            </React.Fragment>

        </View>
    );
};

const styles = StyleSheet.create({
    imagesy: {
        width: 40,
        height: 40,
    },
    loginSuccessMessage: {
        color: 'green',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '600',
        marginTop: 10,
    },
    innerContainer: {
        width: 1113.3,
        height: 1431.3,
        left: -364.3,
        top: -356,
        position: 'absolute',
    },

    whiteBox: {
        width: 635,
        height: 635,
        left: 478.3,
        top: 0,
        position: 'absolute',
        backgroundColor: '#B5C0E7',
        borderRadius: 9999,
    },
    logintitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginHeaderText: {
        padding: 10,
        color: '#1F41BB',
        fontSize: 30,
        fontFamily: 'Poppins',
        fontWeight: '700',
    },
    welcomeText: {
        padding: 10,
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    inputContainer: {
        width: '90%',
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#F1F4FF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1F41BB',
    },
    forgotPasswordText: {
        color: '#1F41BB',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    CreatAccount: {
        color: '#494949',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    signInButton: {
        width: '90%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#1F41BB',
        elevation: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    signInButtonText: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
});

export default LoginScreen;
