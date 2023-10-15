export {};

type MyChainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? (V extends T[K] ? never : K) : K, value: V): MyChainable<Omit<T, K> & { [P in K]: V }>
  get(): T
}

// class Chainable<T = {}> {
//   // private content: T;
//   constructor() {
//     this.content = {};
//   }
//   option<K extends string, V>(name: K, value: V) {
//     return this as unknown as Chainable<Record<K, V> & T>
//   }
//   get() {
//     return this.content
//   }
// }

declare const config: MyChainable

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get()

// expect the type of result to be:
interface Result {
  foo: number
  name: string
  bar: {
    value: string
  }
}