
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import RootComponent from './components/main'


const App:() => Node = () => {
  return (
    <RootComponent/>
  );
}
export default App;