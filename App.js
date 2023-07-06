// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import WelcomeScreen from './app/screens/Register/WelcomeScreen';
import DonorScreen from './app/screens/Register/DonorScreen';
import FoodNeedierScreen from './app/screens/Register/FoodNeedierScreen';
import TransporterScreen from './app/screens/Register/TransporterScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{                    // To Hide the Header
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Transpoter" component={TransporterScreen}/>
        <Stack.Screen name="FoodNeedier" component={FoodNeedierScreen}/>
        <Stack.Screen name="Donor" component={DonorScreen}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;