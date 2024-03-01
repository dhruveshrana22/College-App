import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Svg, { Image as SvgImage } from 'react-native-svg';
import Loader from './Loader';


const LoginScreen = () => {
    const [isLoding, setIsLoding] = useState();
    const navigation = useNavigation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsLoding(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [useIsFocused]);


    const handleSignupbtn = () => {
        navigation.navigate('SignUp')

    }


    return (



        <View style={{ flex: 1, }}>{isLoding ? (<Loader />) : (<React.Fragment>
            <View style={styles.innerContainer}>
                <View style={styles.whiteBox}></View>
            </View>


            {/* LOgin Contente */}


            <View style={styles.logintitle}>
                <Text style={styles.loginHeaderText}>Login here</Text>
                <Text style={styles.welcomeText}>Welcome back you’ve{'\n'}been missed!</Text>
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
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#626262"
                    />
                </View>

                <View style={{ width: '90%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity><Text style={styles.forgotPasswordText}>Forgot your password?</Text></TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signInButton} >
                    <Text style={styles.signInButtonText}>Sign in</Text>
                </TouchableOpacity>


                {/* Create New account button  */}
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', height: '10%' }}>
                    <TouchableOpacity onPress={handleSignupbtn}><Text style={styles.CreatAccount}>Create New Account</Text></TouchableOpacity>
                </View>

            </View>


            {/* Social Meidia BUttons  */}
            <View style={{ padding: 20, height: '25%', width: '100%', alignItems: 'center', justifyContent: 'flex-start', }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={styles.symbol}>or Continue with</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'space-evenly', padding: 10, gap: 10, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flexDirection: 'row', gap: 10, padding: 10 }}>
                            <View style={{
                                backgroundColor: 'lightgray', // Set your desired background color
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
                                backgroundColor: 'lightgray', // Set your desired background color
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

        </React.Fragment>)}
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
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
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




export default LoginScreen;
