type GreaterThanA = GreaterThan<2, 1> //should be true
type GreaterThanB = GreaterThan<1, 1> //should be false
type GreaterThanC = GreaterThan<10, 100> //should be false
type GreaterThanD = GreaterThan<111, 11> //should be trutype GreaterThanA = e

// type GreaterThan<A extends number, B extends number> = A extends B ? false : A extends B ? false : true
type ArrayWithLength<T extends number, U extends any[] = []> = U['length'] extends T ? U : ArrayWithLength<T, [true, ...U]>;
type GreaterThan<T extends number, U extends number> = ArrayWithLength<U> extends [...ArrayWithLength<T>, ...infer _] ? false : true;