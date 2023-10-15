type case1 = IsUnion<string> // false
type case2 = IsUnion<string | number> // true [string | number] => [string] | [number]
type case3 = IsUnion<[string | number]> // false
// [T] 分布式类型
type IsUnion<T, B = T> = T extends any ? [B] extends [T] ? false : true : never // extends 后不会自动分发到联合类型
// [B] [string | number]
// [T] [string] | [number]