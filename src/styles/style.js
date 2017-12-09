import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center', // main axis
    alignItems: 'center', // cross axis
    flexDirection: 'column', // main axis
    backgroundColor: 'whitesmoke'
  },
  brand: {
    alignSelf: 'center',
    color: 'grey',
    marginBottom: 20,
    fontSize: 20,
    fontFamily: 'Helvetica'
  },
  brandImage: {
    alignSelf: 'center',
    width: 100,
    height: 100
  },
  loginForm: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10
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
    flex: 0,
    height: 30,
    padding: 5,
    borderColor: 'lightgray',
    borderWidth: 1
  },
  todoList: {
    marginTop: 14,
    alignSelf: "stretch",
  },
  todo: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 0,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  todo_title: {
    flex: 0,
    width: 120,
    alignSelf: "center",
    marginRight: 15
  },
  todo_content: {
    flex: 0,
    width: 120,
    alignSelf: "center",
    marginRight: 15
  },
  todo_button: {
    flex: 0,
    alignSelf: "center"
  }
});