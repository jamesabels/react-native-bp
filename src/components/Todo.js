import React from 'react';
import styles from '../styles/style';
import { View } from 'react-native';

import {
Card,
CardItem,
Icon,
ListItem, 
CheckBox, 
Text, 
Body, 
Button,
Left, 
Right,
Grid,
Row,
Col 
} from 'native-base';

// Import custom components
import UniversalTextInput from './UniversalTextInput';

// Import Logic
import { State, updateTodo, removeTodo, addTodo, getTodos, getMe } from '../libs/api.js'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: false,
      edit: false,
      title: null,
      titleInput: null,
      contentInput: null
    }
  }
  componentDidMount () {
    this.setState({
      titleInput: this.props.todo.title,
      contentInput: this.props.todo.content
    });
    if (this.props.todo.edit) {
      this.setState({
        edit: this.props.todo.edit
      });
    }
  }
  _updateTodo (todo, token) {
    console.log('TODO...', todo);
    removeTodo(todo.id)
      .then(data => {
        addTodo(this.state.titleInput, this.state.contentInput, State.user.id);
        State.user.todos = getTodos(State.token);
      })
    this._toggleEdit(false);
  }
  _toggleEdit (value) {
    this.setState({
      edit: value
    });
  }
  _completeTodo (todo, token) {
    this.setState({
      complete: true
    });
    removeTodo(todo.id);
    State.user.todos = getTodos(State.token);
  }
  render() {
    if (this.state.edit) {
      return (
        <Card style={{ marginBottom: 20}}>
          <CardItem header>
          <UniversalTextInput
              customStyle={{ width: 270, alignSelf: 'center' }}
              label={'Title'}
              type={'text'}
              placeholder={null}
              value={this.state.titleInput}
              onChange={(text) => this.setState({ titleInput: text })}
            />
          </CardItem>
          <CardItem>
          <UniversalTextInput
              customStyle={{ width: 270,  alignSelf: 'center' }}
              label={'Content'}
              type={'text'}
              placeholder={null}
              value={this.state.contentInput}
              onChange={(text) => this.setState({ contentInput: text })}
            />
          </CardItem>
            <Button 
              full
              transparent
              onPress={() => this._updateTodo(this.props.todo, State.token)}
            >
              <Icon name={'checkmark'} style={{fontSize: 60, alignSelf: 'center' }} />
            </Button>
        </Card>
      );
    }
    return (
      <ListItem style={styles.todo}>
        <CheckBox checked={this.state.complete} onPress={() => this._completeTodo(this.props.todo, State.token)} />
          <Grid>
            <Left>
            <Col>
              <Text style={{ alignSelf: 'flex-start' }}>{this.props.todo.title}</Text>
            </Col>
            </Left>
            <Right>
            <Col>
              <Button
                transparent
                onPress={() => this._toggleEdit(true)}
              >
                <Icon name={'open'} />
              </Button>
            </Col>
            </Right>
          </Grid>
      </ListItem>
    );
  }
}