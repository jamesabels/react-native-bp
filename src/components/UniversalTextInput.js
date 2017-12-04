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

  _renderLabel (label) {
    if (label) {
      return <Text style={styles.textInputLabel}>{label}</Text>
    } else {
      return
    }
  }
  render() {
    return (
      <View style={{alignSelf: 'stretch'}}>
        {this._renderLabel(this.props.label)}
        <TextInput
          style={[styles.textInput, this.props.customStyle]}
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