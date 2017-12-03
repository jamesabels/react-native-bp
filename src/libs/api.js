import { GraphQLClient } from 'graphql-request'

export const State = {
  isFetching: false,
  user: null,
  token: null,
  todos: null
};

const client = new GraphQLClient('http://localhost:8080/graphql',{
});

export function Login (email, password) {
  let query = `
  mutation UserLogin ($user: UserLoginInput) {
    login(user: $user) {
      id
      username
      email
      token
    } 
  }`;

  let vars = {
    user: {
      email,
      password
    }
  };

  State.isFetching = true;

  return client.request(query, vars)
    .then(data => {
      State.token = data.login.token;
      State.isFetching = false;
    })
}

export function Logout () {
  State.user = null;
  State.token = null;
  State.todos = null;
}

export function Register (username, email, password) {
  let query = `
  mutation UserRegister ($user: UserRegisterInput) {
    register(user: $user) {
      id
      username
      email
      token
    } 
  }`;

  let vars = {
    user: {
      username,
      email,
      password
    }
  };

  State.isFetching = true;

  client.request(query, vars)
    .then(data => {
      State.user = GetMe(data.register.token);
      State.token = data.register.token;
      State.isFetching = false;
    })
    .then(data => { console.log(State.user) })
}

export function GetMe (token) {
  let query = `
  query GetMe ($token: String!) {
    viewer(token: $token) {
      me {
        id
        username
        email
        token
        todos {
          id
          title
          content
          user {
            id
            username
          }
        }
      }
    }
  }`;

  let vars = {
    token
  };

  return client.request(query, vars)
}