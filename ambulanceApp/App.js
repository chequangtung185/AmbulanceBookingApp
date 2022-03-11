
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


export default class App extends Component{
  render(){
  return (
    <Home/>
  )
}
}