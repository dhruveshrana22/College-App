// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';

import MainScreen from './Screen/MainScreen';
import Card from './Screen/Card';
import AddPersonScreen from './Componants/AddPersons';
import addpersons from './Componants/AddPersons';
import LoginScreen from './src/Screen/LoginScreen';
import SignUpScreen from './src/Screen/LoginScreensAll/SignUpScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

    </Stack.Navigator>
  );
};


// const DrawerNavigation = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name='Home' component={Card} />
//     </Drawer.Navigator>
//   )
// }


const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
