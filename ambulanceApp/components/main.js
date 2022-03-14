import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import Login from './Login';


const Stack = createNativeStackNavigator();
export default RootComponent = function() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
    <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />  
    </Stack.Navigator>
    </NavigationContainer>
  );
}