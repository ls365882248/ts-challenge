type reverseA = Reverse<['a', 'b']> // ['b', 'a']
type reverseB = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']

type Reverse<T extends any[]> = T extends [infer L, ...infer R] ? [...Reverse<R>, L] : T;
// type Reverse<T extends any[]> = T extends [infer F, ...infer Rest] ? [...Reverse<Rest>, F] : T;