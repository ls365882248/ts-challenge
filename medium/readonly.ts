export {};

interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly<T, K extends keyof T> = {
  readonly [key in K]: T[key];
} & {
  [key in keyof T as (key extends K ? never : key)]: T[key]
}

const todo: MyReadonly<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK