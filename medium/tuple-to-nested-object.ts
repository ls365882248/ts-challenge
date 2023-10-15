type tupleA = TupleToNestedObject<['a'], string> // {a: string}
type tupleB = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type tupleC = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T, U> = T extends [infer L, ...infer R] ? {[key in L & string]: TupleToNestedObject<R, U>} : U;