
export {};

type Replace<S extends string, From extends string, To extends string> = '' extends From ? S : S extends `${infer U}${From}${infer V}` ? `${U}${To}${V}` : S
type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
