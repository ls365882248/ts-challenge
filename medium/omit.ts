interface Todo {
  title: string
  description: string
  completed: boolean
}

// type MyOmit<T, U extends keyof T> = {
//   [key in Exclude<keyof T, U>]: T[key];
// }

// TODO 怎么理解
type MyExclude<T, U> =  T extends U ? never : T;
// type MyOmit<T, K extends keyof T> = {[key in MyExclude<keyof T, K>]: T[key]}
type MyOmit<T, K extends keyof T> = {
  // as 也作为类型推断依据
  [P in keyof T as MyExclude<P, K>]: T[P];
};

// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T as P extends K ? never : P]: T[P];
// };

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}
export {};