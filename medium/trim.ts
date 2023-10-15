export {};

type WS = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${WS}${infer Rest}` | `${infer Rest}${WS}` ? Trim<Rest> : S;

type trimed = Trim<'  Hello World  '>