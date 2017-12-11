export const AddTodo = 
`mutation AddTodo ($todo: TodoInput) {
    addTodo(todo: $todo) {
      id
      title
      content
      user {
        id
        username
        email
      }
    }
  }`;

export const RemoveTodo = 
`mutation RemoveTodo ($todo: TodoRemove) {
    removeTodo(todo: $todo) {
         id
    }
}`;

export const UpdateTodo = 
`mutation UpdateTodo ($todo: TodoUpdate) {
    updateTodo(todo: $todo) {
      id
      title
      content
      user {
        id
        username
        email
      }
    }
  }`;

export const GetTodos = 
`query GetTodos ($token: String!) {
    viewer(token: $token) {
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
}`;

export const GetTodo = 
`query GetTodo ($token: String!, $id: String!) {
    viewer(token: $token) {
      todo (id: $id) {
        id
        title
        content
        user {
          id
          username
        }
      }
    }
}`;

