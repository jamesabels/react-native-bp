import React from 'react';
import styles from '../styles/style';
import { Text, View, Button, TextInput } from 'react-native';

export default class UniversalTextInput extends React.Component {
  _getKeyboardType (type) {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'text':
        return 'default';
      case 'number':
        return 'numeric';
      case 'phone':
        return 'phone-pad';
      default:
        return 'default'
    }
  }

  render() {
    return (
      <View style={styles.textInputWrap}>
        <Text style={styles.textInputLabel}>{this.props.label}</Text>
        <TextInput
          style={styles.textInput}
          keyboardType={this._getKeyboardType(this.props.type || 'default')}
          secureTextEntry={this.props.secure || false}
          placeholder={this.props.placeholder}
          onChangeText={(text) => this.props.onChange(text)}
          value={this.props.value}
        />
      </View>
    );
  }
}