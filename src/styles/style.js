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
    flex: 1,
    flexDirection: 'row',  // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
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