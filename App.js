import React, { Component } from "react";
import { Root, Text } from 'native-base';

// Import screens
import LoginScreen from "./src/views/Login/index.js";

// Import logic
import { State } from './src/libs/api.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Text>Loading...</Text>;
    }
  return (
    <Root>
      <LoginScreen screenProps={State} /> 
    </Root>
  );
  }
}