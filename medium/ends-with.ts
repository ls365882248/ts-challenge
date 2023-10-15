type endA = EndsWith<'abc', 'bc'> // expected to be true
type endB = EndsWith<'abc', 'abc'> // expected to be true
type endC = EndsWith<'abc', 'd'> // expected to be false

type EndsWith<T extends string, U extends string> = T extends `${infer R}${U}` ? true : false;