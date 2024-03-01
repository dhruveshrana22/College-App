import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = async () => {
        try {
            const storedEmail = await AsyncStorage.setItem('email', username)
            const storedPassword = await AsyncStorage.setItem('password', password)
            console.log('Stored Email:', storedEmail);
            console.log('Stored Password:', storedPassword);
            navigation.navigate('Login')
        } catch (error) {
            console.log('errordaTA', error)
        }
    };

    return (
        <View style={{ flex: 1, }}>
            <View style={styles.innerContainer}>
                <View style={styles.whiteBox}></View>
            </View>


            {/* Create Account */}


            <View style={styles.logintitle}>
                <Text style={styles.loginHeaderText}>Create Account</Text>
                <Text style={styles.welcomeText}>Create an account so you can explore all the existing jobs</Text>
            </View>

            {/* Form Input field */}


            <View style={{
                flex: 1, padding: 10, alignItems: 'center',
                gap: 10, justifyContent: 'flex-start', height: '100%'
            }}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#626262"
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#626262"
                        onChangeText={(text) => setPassword(text)}

                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Conferm Password"
                        placeholderTextColor="#626262"
                    />
                </View>



                <TouchableOpacity style={styles.signInButton} onPress={handleLogin} >
                    <Text style={styles.signInButtonText}>Sign up</Text>
                </TouchableOpacity>


                {/* Create New account button  */}
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', height: '10%' }}>
                    <TouchableOpacity ><Text style={styles.CreatAccount}>Already have an account</Text></TouchableOpacity>
                </View>

            </View>


            {/* Social Meidia BUttons  */}
            <View style={{ padding: 20, height: '25%', width: '100%', alignItems: 'center', justifyContent: 'flex-start', position: 'relative' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.symbol}>or Continue with</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', padding: 10, gap: 10, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View style={{
                                backgroundColor: 'lightgray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                                borderRadius: 50

                            }}>
                                <Image
                                    source={require('../images/ph_google-logo-bold.png')}
                                    style={styles.imagesy}

                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View style={{
                                backgroundColor: 'lightgray',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                                borderRadius: 50

                            }}>
                                <Image
                                    source={require('../images/ic_sharp-facebook.png')}
                                    style={styles.imagesy}

                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View style={{
                                backgroundColor: 'lightgray', // Set your desired background color
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                                borderRadius: 50

                            }}>
                                <Image
                                    source={require('../images/ic_baseline-apple.png')}
                                    style={styles.imagesy}

                                />
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        </View >


    );
};

const styles = StyleSheet.create({

    imagesy: {
        width: 40,
        height: 40,
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
        fontSize: 18,
        fontFamily: 'Poppins',
    },
    inputContainer: {
        width: '90%',
        backgroundColor: '#F1F4FF',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1F41BB',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10,
    },
    input: {
        paddingLeft: 20,

        color: '#626262',
        fontSize: 16,
        fontFamily: 'Poppins',
        fontWeight: '500',
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
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
});

export default SignUpScreen;
