import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// Import Screens
import LoginScreen from './Login.js'
import RegisterScreen from "../Register/Register.js";
import MainScreen from "../Main/Main.js";

// Import custom components
import Sidebar from "../Sidebar/Sidebar.js";

// Import logic 
import { State } from '../../libs/api.js';

const LoginScreenRouter = StackNavigator(
    {
      Login: { 
        screen: LoginScreen,
        screenProps: State,
        navigationOptions: ({navigation}) => ({
          title: `Login`
        }),
      },
      Register: { 
        screen: RegisterScreen,
        screenProps: State,
        navigationOptions: ({navigation}) => ({
          title: `Register`
        }),
      },
      Main: { 
        screen: MainScreen ,
        screenProps: State,
        navigationOptions: ({navigation}) => ({
          title: `Main`,
          state: State,
          todos: State.todos
        })
      }
    }
  );

export default LoginScreenRouter;