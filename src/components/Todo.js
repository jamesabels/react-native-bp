import React from 'react';
import styles from '../styles/style';
import { View } from 'react-native';

import { 
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
  _toggleEdit () {
    this.setState({
      edit: true
    })
  }
  _completeTodo () {
    console.log('Todo Complete')
  }
  render() {
    if (this.state.edit) {
      return (
        <View style={styles.todo}>
            <UniversalTextInput
              customStyle={styles.todo_title}
              label={null}
              type={'text'}
              placeholder={null}
              value={this.props.todo.title}
              onChange={(text) => {
                // TODO: IMPLEMENT UPDATE TODO ON BACKEND
              }}
            />
            <UniversalTextInput
              customStyle={styles.todo_content}
              label={null}
              type={'text'}
              placeholder={null}
              value={this.props.todo.content}
              onChange={(text) => {
                // TODO: IMPLEMENT UPDATE TODO ON BACKEND
              }}
            />
            <Button
              customStyle={styles.todo_button}
              title="Save"
              onPress={() =>
                this.setState({
                  edit: false
                })
              }
            />
        </View>
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
                onPress={() => this._toggleEdit()}
              >
                <Icon name={'open'}/>
              </Button>
            </Col>
            </Right>
          </Grid>
      </ListItem>
    );
  }
}