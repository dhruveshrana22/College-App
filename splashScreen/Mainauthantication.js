import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions/auth'; // Import your action creators

const Stack = createStackNavigator();

const MainComponent = ({ isAuthenticated, loginSuccess }) => {
    // You may want to use useEffect to check the authentication status on component mount
    useEffect(() => {
        // You can perform any authentication check here and update the state accordingly
        // For now, let's assume you have a function checkAuthentication that returns a boolean
        const isAuthenticated = checkAuthentication();
        if (isAuthenticated) {
            // Dispatch loginSuccess action with user data
            loginSuccess({ /* user data here */ });
        }
    }, [loginSuccess]);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isAuthenticated ? (
                    <Stack.Screen name="MainHome" component={MainStack} />
                ) : (
                    <Stack.Screen name='Auth' component={AuthComponent} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Connect the component to the Redux store
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.user !== null,
});

const mapDispatchToProps = {
    loginSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
