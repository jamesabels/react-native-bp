import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  brand: {
    color: 'grey',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  brandImage: {
    width: 100,
    height: 100
  },
  loginForm: {
    flex: 1,
    alignItems: 'center',
    marginTop: 75
  },
  textInputWrap: {
    marginTop: 5,
    marginBottom: 5
  },
  textInputLabel: {
    padding: 2,
    color: 'gray'
  },
  textInput: {
    padding: 5,
    height: 30,
    width: 250,
    borderColor: 'lightgray',
    borderWidth: 1
  }
});