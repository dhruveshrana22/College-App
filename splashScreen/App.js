import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import MainScreen from './src/screens/MainScreen';
import LoginScreen from './src/screens/LoginScreensAll/LoginScreen';
import SignUpScreen from './src/screens/LoginScreensAll/SignUpScreen';
import WelcomeScreen from './src/screens/LoginScreensAll/WelcomeScreen';
import DetailsScreen from './src/Componant/NumberSize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CartScreen from './src/screens/CartScreen';
import StarScreen from './src/screens/StarScreen';
import Satr from './src/screens/StarScreen';
import Account from './src/screens/Account';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistor, store } from './src/redux2/Store/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
);


const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const icon = options.tabBarIcon({ color: isFocused ? 'white' : 'black', size: 24 });

                return (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.tabBarButton,
                            {
                                backgroundColor: isFocused ? '#ED7330' : 'transparent',
                                borderRadius: 100, // Adjust the border radius value
                            },
                        ]}
                        onPress={() => navigation.navigate(route.name)}
                    >
                        {icon}
                        <Text style={{ color: isFocused ? 'white' : 'black' }}>{route.name}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};



const BottomTabNavigator = () => (
    <Tab.Navigator initialRouteName='Home' tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen
            name="Home"
            component={MainScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={({ navigation }) => ({
                title: 'S H O P P I N G   C A R T',
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#67E389',
                },
                headerTitleStyle: {

                    color: 'white',
                },
                headerLeft: () => (
                    <AntDesign
                        name="arrowleft"
                        size={24}
                        color="white"
                        style={{ marginLeft: 15 }}
                        onPress={() => navigation.goBack()}
                    />
                ),
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="shoppingcart" size={size} color={color} />
                ),
            })}
        />
        <Tab.Screen
            name="Star"
            component={Satr}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="star-o" size={size} color={color} />
                ),
            }}
        />
        <Tab.Screen
            name="User"
            component={Account}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Feather name="user" size={size} color={color} />
                ),
            }}
        />
    </Tab.Navigator>

);

const Authant = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />

        </Stack.Navigator>
    )
}

const MainComponent = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // // Implement your authentication logic here
    // // For example, you might use Redux, AsyncStorage, or some other method to check if the user is authenticated

    // // Assuming you have a function to check authentication status
    // const checkAuthentication = async () => {
    //     // Replace this with your actual authentication check logic
    //     const userIsAuthenticated = await someAuthenticationCheckFunction();
    //     setIsAuthenticated(userIsAuthenticated);
    // };

    // useEffect(() => {
    //     checkAuthentication();
    // }, []); // Run the check when the component mounts

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainScreen" component={MainStack} />
                {/* 
                {isAuthenticated ? (
                    <Stack.Screen name="MainScreen" component={MainStack} />
                ) : (
                    <Stack.Screen name='Auth' component={Authant} />
                )} */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};



const App = () => {


    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <MainComponent />
            </PersistGate>
        </Provider>
    );
};



const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        marginVertical: 20

    },
    tabBarButton: {
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',

    },
});



export default App;
