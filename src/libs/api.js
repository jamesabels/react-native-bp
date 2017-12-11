import { GraphQLClient } from 'graphql-request'

// Import Queries
import { UserLogin, UserRegister, UserRemove, GetMe, GetUser, GetUsers } from './queries/auth.js';
import { AddTodo, RemoveTodo, UpdateTodo, GetTodo, GetTodos } from './queries/todos.js';

export const State = {
  isFetching: false,
  user: null,
  token: null,
  todos: null
};

const client = new GraphQLClient('http://localhost:8080/graphql',{
});

export function userLogin (email, password) {
  let vars = {
    user: {
      email,
      password
    }
  };

  State.isFetching = true;

  return client.request(UserLogin, vars)
    .then(data => {
      State.user = {
        id: data.userLogin.id,
        username: data.userLogin.username,
        todos: data.userLogin.todos
      },
      State.token = data.userLogin.token;
      State.isFetching = false;
    })
}

export function userLogout () {
  State.user = null;
  State.token = null;
  State.todos = null;
}

export function userRegister (username, email, password) {
  let vars = {
    user: {
      username,
      email,
      password
    }
  };

  State.isFetching = true;

  client.request(UserRegister, vars)
    .then(data => {
      State.user = GetMe(data.userRegister.token);
      State.token = data.userRegister.token;
      State.isFetching = false;
    })
    .then(data => { console.log(State.user) })
}

export function getMe (token) {
  let vars = {
    token
  };

  return client.request(GetMe, vars)
}

export function addTodo (title, content, user) {
  let vars = {
    todo: {
      title,
      content,
      user
    }
  };

  return client.request(AddTodo, vars);
}

export function updateTodo (id, title, content, user) {
  let vars = {
    todo: {
      id,
      title,
      content,
      user
    }
  };

  return client.request(UpdateTodo, vars);
}

export function removeTodo (id) {
  let vars = {
    todo: {
      id
    }
  };

  return client.request(RemoveTodo, vars)
}

export function getTodo (token, id) {
  let vars = {
    token,
    id
  };

  return client.request(GetTodo, vars);
}

export function getTodos (token) {
  let vars = {
    token
  };

  return client.request(GetTodos, vars);
}