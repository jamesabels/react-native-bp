import React from 'react';
import {Login, State} from './src/libs/api'
import { StackNavigator } from 'react-navigation';

// Import Screens
import LoginScreen from './src/views/Login.js';
import RegisterScreen from './src/views/Register.js';
import MainScreen from './src/views/Main.js';
import styles from "./src/styles/style.js";


const Router = StackNavigator({
  Home: { screen: LoginScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Main: { screen: MainScreen }
});

export default class App extends React.Component {
  render() {
    return <Router screenProps={State} />;
  }
}