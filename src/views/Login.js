import React from 'react';
import styles from '../styles/style';
import { NavigationActions } from 'react-navigation'
import { Text, View, Button, Image } from 'react-native';

// Import Custom Components
import UniversalTextInput from '../components/UniversalTextInput.js';

// Import logic
import { State, Login } from "../libs/api";
import Navigation from "../libs/navigation";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: 'steve@dave.com',
      passwordInput: 'stevedavethebest'
    }
  }
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.loginForm}>
          <Image source={require('../assets/logo.png')} style={styles.brandImage} />
          <Text style={styles.brand}>React Native Boilerplate</Text>
          <UniversalTextInput
            label={'Email'}
            type={'email'}
            placeholder={'email@example.com'}
            value={this.state.emailInput}
            onChange={(text) => { this.setState({ emailInput: text}) }}
          />
          <UniversalTextInput
            label={'Password'}
            type={'text'}
            secure={true}
            placeholder={'password'}
            value={this.state.passwordInput}
            onChange={(text) => { this.setState({ passwordInput: text}) }}
          />
          <Button
            title="Login"
            onPress={() =>{
              Login(this.state.emailInput, this.state.passwordInput)
                .then((data) => this.props.navigation.dispatch(Navigation.reset(0, 'Main')))
            }}
          />
          <Button
            title="Register"
            onPress={() =>
              navigate('Register')
            }
          />
        </View>
      </View>
    );
  }
}