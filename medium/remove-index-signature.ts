type TypeFoo = {
  [key: string]: any
  foo(): void
}

type RemoveTest111 = RemoveIndexSignature<TypeFoo> // expected { foo(): void }

type RemoveIndexSignature<T, P = PropertyKey> = {
  [K in keyof T as P extends K? never : K extends P ? K : never]: T[K]
}