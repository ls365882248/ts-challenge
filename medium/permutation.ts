export {};
type Permutation<T, K=T> = [T] extends [never] ? [] : K extends any ? [K, ...Permutation<Exclude<T, K>>] : []

type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']