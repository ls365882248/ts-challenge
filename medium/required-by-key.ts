interface IUser {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<IUser, 'name'> // { name: string; age?: number; address?: string }

type RequiredByKeys<T, K extends keyof T> = {
  [key in keyof T as key extends K ? key : never]-?: T[key]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}
