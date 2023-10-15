type AllCombinations_ABC = AllCombinations<'ABC'>;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

type StringToUnion1<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S
type AllCombinations<
  S extends string,
  T extends string = StringToUnion1<S>,
  U extends string = T,
> = S extends `${infer F}${infer R}`
  ? U extends U
    ? `${U}${AllCombinations<R, U extends '' ? T : Exclude<T, U>>}`
    : never
  : ''

// 有点难 pass