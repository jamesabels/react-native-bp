import React from 'react';
import styles from '../../styles/style';
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

// Import logic
import { userRegister } from "../../libs/api";

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailInput: 'test@test.net',
      usernameInput: 'testuser',
      passwordInput: 'test'
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
              onChange={(text) => { this.setState({ emailInput: text }) }}
            />
            <UniversalTextInput
              label={'Username'}
              type={'text'}
              placeholder={'username'}
              onChange={(text) => { this.setState({ usernameInput: text }) }}
            />
            <UniversalTextInput
              label={'Password'}
              type={'text'}
              secure={true}
              placeholder={'password'}
              onChange={(text) => { this.setState({ passwordInput: text }) }}
            />
            <Button
              style={{ alignSelf: "center" }}
              transparent
              title="Register"
              onPress={() =>
                userRegister(
                  this.state.usernameInput,
                  this.state.emailInput,
                  this.state.passwordInput
                )
              }
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}