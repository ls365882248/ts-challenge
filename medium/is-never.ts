type A = IsNever<never> // expected to be true
type B = IsNever<undefined> // expected to be false
type C = IsNever<null> // expected to be false
type D = IsNever<[]> // expected to be false
type E = IsNever<number> // expected to be false

// type IsNever<T> = T extends never ? true : false;
// 如果直接使用 T 做判断，当 T 为 never 的时候，将始终返回 never，因为 never 会被分配给任何类型。所以我们需要使用 [T] extends [never] 来判断。
type IsNever<T> = [T] extends [never] ? true : false 