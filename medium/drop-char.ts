type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<T, U extends string> = T extends `${infer A}${U}${infer B}` ? DropChar<`${A}${B}`, U> : T