export const UserLogin =
`mutation UserLogin ($user: UserLogin) {
    userLogin(user: $user) {
        id
        username
        email
        todos {
            id
            title
            content
        }
        token
    }
}`;

export const UserRegister =
`mutation UserRegister ($user: UserRegister) {
    userRegister(user: $user) {
        id
        username
        email
        token
    }
}`;

export const UserRemove =
`mutation UserRemove ($user: UserRemove) {
    userRemove(user: $user) {
      id
    }
}`;

export const GetUser =
`query GetUser ($token: String!, $id: String!) {
    viewer (token: $token) {
      user(id: $id) {
        id
        username
        password
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
  }
`;

export const GetUsers =
`query GetUsers ($token: String!) {
    viewer(token: $token) {
      users {
        id
        username
        email
        password
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
  }
`;

export const GetMe =
`query GetMe ($token: String!) {
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
