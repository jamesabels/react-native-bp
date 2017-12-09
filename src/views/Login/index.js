import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// Import Screens
import LoginScreen from './Login.js'
import RegisterScreen from "../Register/Register.js";
import MainScreen from "../Main/Main.js";

// Import custom components
import Sidebar from "../Sidebar/Sidebar.js";

const LoginScreenRouter = StackNavigator(
    {
      Login: { screen: LoginScreen },
      Register: { screen: RegisterScreen },
      Main: { screen: MainScreen, props: { token: 'token' } }
    },
    {
      contentComponent: props => <Sidebar {...props} />
    }
  );

export default LoginScreenRouter;