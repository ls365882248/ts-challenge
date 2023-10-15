export {};

type IgnoreString = ' ' | '\n' | '\t'
type TrimLeft<S extends string> =
  S extends `${infer L extends IgnoreString}${infer R}` ? TrimLeft<R> : S

type trimed = TrimLeft<'  Hello World  '>