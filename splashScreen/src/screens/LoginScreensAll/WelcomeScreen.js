import React from 'react';
import { View, Button, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (

        <View style={styles.container} >
            <View style={styles.rounddg} />
            <View style={{ flex: 1 }}>
                {/* <Image
                    style={styles.img}
                    source={"./images/welcomeimage.png"}
                /> */}
            </View>
            <View style={styles.container1}>
                <Text style={styles.title}>Welcome To Dc Cart </Text>
            </View>
            <View style={styles.lgsgbtn}>
                <TouchableOpacity style={styles.loginButton}
                    onPress={handleLoginPress}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.registerButton}
                    onPress={handleSignUpPress} >
                    <Text style={styles.buttonText2} >Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    rounddg: {
        position: 'absolute',
        width: '120%',
        right: -200,
        top: -590,
        height: '100%',
        backgroundColor: '#B5C0E7',
        borderRadius: 999,
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.47)',
        position: 'absolute',
        backdropFilter: 'blur(50px)',
    },
    img: {
        padding: 50,
        width: 385,
        height: 422,
    },
    container1: {
        top: 100,
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 20,
        paddingTop: 80,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        justifyContent: 'center',
        width: 343,
        textAlign: 'center',
        color: '#1F41BB',
        fontSize: 35,
        fontFamily: 'Poppins',
        fontWeight: '900',
        padding: 20,
    },
    subtitle: {
        width: 323,

        textAlign: 'center',
        color: 'black',
        fontSize: 14,
        fontFamily: 'Poppins',
        fontWeight: '400',
    },
    lgsgbtn: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 50,
        gap: 20,
    },
    loginButton: {
        paddingVertical: 15,
        paddingHorizontal: 50,
        height: 60,
        backgroundColor: '#1F41BB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        paddingVertical: 15,
        paddingHorizontal: 50,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white', // or '#0A0A0A' for Register button
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
    buttonText2: {
        textAlign: 'center',
        color: 'black', // or '#0A0A0A' for Register button
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '600',
    },
});

export default WelcomeScreen;
