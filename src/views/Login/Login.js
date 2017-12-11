import React from 'react';
import { NavigationActions } from 'react-navigation'
import { View, Image } from 'react-native';

import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label,
  Button,
  Text,
  Form
} from "native-base";

// Import Custom Components
import UniversalTextInput from '../../components/UniversalTextInput.js';

// Import styles
import styles from '../../styles/style';

// Import logic
import { State, userLogin } from "../../libs/api";
import Navigation from "../../libs/navigation";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: 'steve@dave.com',
      passwordInput: 'stevedavethebest'
    }
  }
  render() {
    return (
      <Container>
        <Content padder>
          <Image source={require('../../assets/logo.png')} style={styles.brandImage} />
          <Text style={styles.brand}>React Native Boilerplate</Text>
          <Form>
            <UniversalTextInput
              label={'Email'}
              type={'email'}
              placeholder={'email@example.com'}
              value={this.state.emailInput}
              onChange={(text) => { this.setState({ emailInput: text }) }}
            />
            <UniversalTextInput
              label={'Password'}
              type={'text'}
              secure={true}
              placeholder={'password'}
              value={this.state.passwordInput}
              onChange={(text) => { this.setState({ passwordInput: text }) }}
            />
            <Button
              style={{ marginTop: 20, alignSelf: "center" }}
              transparent
              onPress={() => {
                userLogin(this.state.emailInput, this.state.passwordInput)
                  .then((data) => this.props.navigation.dispatch(Navigation.reset(0, 'Main')))
              }}>
              <Text>Login</Text>
            </Button>
            <Button
              style={{ alignSelf: "center" }}
              transparent
              title="Register"
              onPress={() => this.props.navigation.navigate('Register')}
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}