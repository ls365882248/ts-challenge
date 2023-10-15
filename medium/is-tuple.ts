type IsTuplecase1 = IsTuple<[number]> // true
type IsTuplecase2 = IsTuple<readonly [number]> // true
type IsTuplecase3 = IsTuple<number[]> // false

// type IsTuple<T> = T extends [infer R, ...infer U] ? U extends any[] ? true : false : false

type IsTuple<T> = 
  T extends readonly any[]?
    number extends T['length']?false:true
  :false