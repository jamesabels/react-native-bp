import React, { Component } from "react";

// Import screens
import LoginScreen from "./src/views/Login/index.js";

// Import logic
import { State } from './src/libs/api.js';

export default class AwesomeApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <h1>Loading...</h1>;
    }
    return <LoginScreen screenProps={State} />;
  }
}