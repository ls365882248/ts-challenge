type MyUnshift<T extends any[], U> = [U, ...T]
type Result = MyUnshift<[1, 2], 0> // [0, 1, 2,]
export {};