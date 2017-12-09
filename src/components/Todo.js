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

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
      title: null
    }
  }
  _toggleEdit (value) {
    this.setState({
      edit: value
    })
  }
  _completeTodo () {
    console.log('Todo Complete')
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
              value={this.props.todo.title}
              onChange={(text) => {
                // TODO: IMPLEMENT UPDATE TODO ON BACKEND
              }}
            />
          </CardItem>
          <CardItem>
          <UniversalTextInput
              customStyle={{ width: 270,  alignSelf: 'center' }}
              label={'Content'}
              type={'text'}
              placeholder={null}
              value={this.props.todo.content}
              onChange={(text) => {
                // TODO: IMPLEMENT UPDATE TODO ON BACKEND
              }}
            />
          </CardItem>
            <Button 
              full
              transparent
              onPress={() => this._toggleEdit(false)}
            >
              <Icon name={'checkmark'} style={{fontSize: 60, alignSelf: 'center' }} />
            </Button>
        </Card>
      );
    }
    return (
      <ListItem style={styles.todo} >
        <CheckBox checked={false} onPress={() => this._completeTodo()} />
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