// jest test
export type HelloWorld = any ;

type Expect<T> = T;
type Equal<T, U> = T;

type test = Expect<Equal<HelloWorld, string>>

const helloWorld: HelloWorld = 1;