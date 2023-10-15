export {};

type ReplaceAll<S extends string, F extends string, T extends string> =  S extends `${infer A}${F}${infer E}` ? ReplaceAll<`${A}${T}${E}`, F, T> : S 

type replaced = ReplaceAll<'t y p e s', ' ', 's'> // expected to be 'types'