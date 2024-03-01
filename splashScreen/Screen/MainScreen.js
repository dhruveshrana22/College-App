// MainScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Main Screen Content</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
});

export default MainScreen;
