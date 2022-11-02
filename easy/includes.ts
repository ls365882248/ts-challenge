export {};

// ***

type MyIncludes<T, U> = U extends keyof T ? true : false;

type Equal<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2)  ?  true : false

// 遍历执行
type Includes1<T extends readonly any[], U> = T extends [infer R, ...infer K]
? (Equal<R, U> extends true 
  ? true
    : Includes1<K, U>) 
: false



type isPillarMen = MyIncludes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Santana'> // expected to be `false

const a = [1,2,3] as const
const b = typeof a;