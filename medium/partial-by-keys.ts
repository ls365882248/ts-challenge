interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }

// type PartialByKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type PartialByKeys<T, K extends keyof T> = {
  [key in keyof T as key extends K ? key : never]?: T[key]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}