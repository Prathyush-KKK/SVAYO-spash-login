import SplashScreen from './src/screens/SplashScreen';
import Onboarding0 from './src/screens/OnboardingScreen0';
import Onboarding1 from './src/screens/OnboardingScreen1';
import Onboarding2 from './src/screens/OnboardingScreen2';
import Login from './src/screens/LoginScreen';
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name = "Onboarding0" component = {Onboarding0} options={{headerShown: false}}/>
        <Stack.Screen name = "Onboarding1" component = {Onboarding1} options={{headerShown: false}}/>
        <Stack.Screen name = "Onboarding2" component = {Onboarding2} options={{headerShown: false}}/>
        <Stack.Screen name = "LoginScreen" component = {Login} options={{headerShown: false}}/>
        <Stack.Screen name = "SplashScreen" component = {SplashScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



