import React from 'react';
import styles from '../../styles/style';
import { View, FlatList, Image } from 'react-native';

import { 
Text, 
Container, 
Button, 
Left, 
Right, 
ActionSheet,
Icon
} from 'native-base';

// Import Custom Components
import Todo from '../../components/Todo.js';

// Import logic
import { State, userLogout, getMe,  addTodo, getTodos, removeTodo } from "../../libs/api";
import Navigation from "../../libs/navigation";

// Import Actionsheet
import { MainActionSheetIOS } from './actions.js';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: null,
      user: null,
      todos: null
    }
  }
  componentDidMount () {
    this.setState({
      todos: State.user.todos
    })
  }
  componentDidUpdate () {
    getTodos(State.token).then(data =>  { 
      this.setState({ todos: data.viewer.todos });
    });
  }
  _keyExtractor = (item, index) => item.id;
  _logout () {
    userLogout();
    this.props.navigation.dispatch(Navigation.reset(0, 'Login'));
  }
  _addTodo() {
    addTodo('Edit Me', 'Edit Me', State.user.id);
    
    getTodos(State.token).then(data =>  { 
      this.setState({ todos: data.viewer.todos });
    });
  }
  _completeTodo (todo) {
    removeTodo(todo.id);
    
    getTodos(State.token).then(data =>  { 
      this.setState({ todos: data.viewer.todos });
    });
  }
  _MainActionSheetController (buttonIndex) {
    switch(buttonIndex) {
        case 0:
          this._addTodo()
          break;
        case 1:
          this._logout()
          break;
        default:
          break;
        
    }
  }
  render() {
    if (State.user.todos === null) {
      return <Text>{'Loading...'}</Text>
    }
    return (
      <Container padder>
          <FlatList
            contentContainerStyle={styles.todoList}
            data={this.state.todos}
            keyExtractor={this._keyExtractor}
            renderItem={({item}) => <Todo todo={item} onComplete={() => this._completeTodo(item)}/>}
          />
          <Button
            transparent
            style={{alignSelf: 'center'}}
            onPress={() =>
              ActionSheet.show(
                {
                  options: MainActionSheetIOS.BUTTONS,
                  cancelButtonIndex: MainActionSheetIOS.CANCEL_INDEX,
                  destructiveButtonIndex: MainActionSheetIOS.DESTRUCTIVE_INDEX,
                  title: MainActionSheetIOS.TITLE
                },
                buttonIndex => {
                  this._MainActionSheetController(buttonIndex);
                }
              )}
            >
              <Icon name={'add'} style={{fontSize: 40}}/>
            </Button>
      </Container>
    );
  }
}