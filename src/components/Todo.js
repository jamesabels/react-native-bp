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
        <View style={styles.textInputWrap}>
          <Text style={styles.textInputLabel}>{this.props.todo.label}</Text>
          <UniversalTextInput
            label={'Title'}
            type={'text'}
            placeholder={null}
            value={this.props.todo.title}
            onChange={(text) => {
              // TODO: IMPLEMENT UPDATE TODO ON BACKEND
            }}
          />
          <UniversalTextInput
            label={'Content'}
            type={'text'}
            placeholder={null}
            value={this.props.todo.content}
            onChange={(text) => {
              // TODO: IMPLEMENT UPDATE TODO ON BACKEND
            }}
          />
          <Button
            title="Update"
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
      <View style={styles.textInputWrap}>
        <Text style={styles.textInputLabel}>{this.props.todo.title}</Text>
        <Text style={styles.textInputLabel}>{this.props.todo.content}</Text>
        <Button
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