// expected to be string
type HelloWorld = any;
// you should make this work
type test = Expect<Equal<HelloWorld, string>>;

type Equal<T, U> = T extends U ? true : false;
type Expect<T> = T;

// =================
// Pick
interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

type MyPick<T, U extends keyof T> = {
  [key in U]: T[key];    // key in U 限制了 key 的类型
}

export {};