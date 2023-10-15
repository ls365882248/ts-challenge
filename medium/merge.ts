type foo = {
  name: string
  age: string
}
type coo = {
  age: number
  sex: string
}

type Merge<T extends object, U extends object> = Omit<T, keyof U> & U;

type MergeResult = Merge<foo, coo>;

const mergeResult: MergeResult = {
  name: 'foo',
  age: 18,
  sex: 'male'
}
