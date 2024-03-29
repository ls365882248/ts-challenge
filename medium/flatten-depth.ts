type FlattenDepthA = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
type FlattenDepthB = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

// type FlattenDepth<T, D = 1> = T extends [infer F, ...infer R] ? F extends any[] ? [...FlattenDepth<F, MinusOne<D>>, ...FlattenDepth<R, D>] : [F, ...FlattenDepth<R, D>] : T
type FlattenDepth<
  T extends any[],
  S extends number = 1,
  U extends any[] = []
> = U['length'] extends S
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...FlattenDepth<F, S, [...U, 1]>, ...FlattenDepth<R, S, U>]
    : [F, ...FlattenDepth<R, S, U>]
  : T

// ugly，太难了