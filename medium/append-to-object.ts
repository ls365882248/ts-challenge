export {}

type Test = { id: '1' }
// type AppendToObject<T extends Object, K extends string, V extends any> = 
type AppendToObject<T extends Object, U extends PropertyKey, V> = {
  [k in (keyof T | U)]: k extends keyof T ? T[k]: V
} 
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }