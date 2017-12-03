import React from 'react';
import styles from '../styles/style';
import { Text, View, Button, Image, FlatList } from 'react-native';

// Import Custom Components
import Todo from '../components/Todo.js';

// Import logic
import { State, Logout, GetMe } from "../libs/api";
import Navigation from "../libs/navigation";

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      todos: null
    }
  }
  static navigationOptions = {
    title: 'Main',
  };
  componentWillMount () {
      console.log(this.props.screenProps);
  }
  componentDidMount () {
    GetMe(this.props.screenProps.token)
      .then(data => {
        this.setState({
          user: data.viewer.me,
          todos: data.viewer.me.todos
        });
      })
      .then(data => {
        console.log(this.state.user, this.state.todos);
      });
  }
  _keyExtractor = (item, index) => item.id;
  render() {
    if (this.state.todos === null) {
      return <Text>{'Loading...'}</Text>
    }
    return (
      <View style={styles.container}>
        <Text>Main Screen</Text>
        <FlatList
          data={this.state.todos}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => {
            return <Todo todo={item}/>
          }}
        />
        <Button
          title="Logout"
          onPress={() => {
            Logout(this.state.emailInput, this.state.passwordInput);
            this.props.navigation.dispatch(Navigation.reset(0, 'Login'));
          }}
        />
      </View>
    );
  }
}