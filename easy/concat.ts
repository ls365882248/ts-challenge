type MyConcat<T extends any[], U extends any[]> = [...T, ...U]

type Result = MyConcat<[1], [2]> // expected to be [1, 2]
export {};