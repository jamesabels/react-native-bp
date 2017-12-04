import React from 'react';
import styles from '../styles/style';
import { Text, View, Button } from 'react-native';

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
      <View style={styles.todo}>
        <Text style={styles.todo_title}>{this.props.todo.title}</Text>
        <Text style={styles.todo_content}>{this.props.todo.content}</Text>
        <Button
          style={styles.todo_button}
          title="Edit"
          onPress={() =>
            this.setState({
              edit: true
            })
          }
        />
      </View>
    );
  }
}