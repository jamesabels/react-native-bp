import React from 'react';
import styles from '../styles/style';
import { Text, View, Button, Image } from 'react-native';

// Import Custom Components
import UniversalTextInput from '../components/UniversalTextInput.js';

// Import logic
import { Register } from "../libs/api";

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: 'test@test.net',
      usernameInput: 'testuser',
      passwordInput: 'test'
    }
  }
  static navigationOptions = {
    title: 'Register',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.loginForm} >
          <Image source={require('../assets/logo.png')} style={styles.brandImage} />
          <Text style={styles.brand}>React Native Boilerplate</Text>
          <UniversalTextInput
            label={'Email'}
            type={'email'}
            placeholder={'email@example.com'}
            onChange={(text) => { this.setState({ emailInput: text}) }}
          />
          <UniversalTextInput
            label={'Username'}
            type={'text'}
            placeholder={'username'}
            onChange={(text) => { this.setState({ usernameInput: text}) }}
          />
          <UniversalTextInput
            label={'Password'}
            type={'text'}
            secure={true}
            placeholder={'password'}
            onChange={(text) => { this.setState({ passwordInput: text}) }}
          />
          <Button
            title="Register"
            onPress={() =>
              Register(
                this.state.usernameInput,
                this.state.emailInput,
                this.state.passwordInput
              )
            }
          />
        </View>
      </View>
    );
  }
}