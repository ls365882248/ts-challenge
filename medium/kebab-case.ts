type FooBarBaz = KebabCase<"FooBarBaz">
const fooBarBaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"

// type KebabCase<T> = T extends `${infer F}${infer R}` ? F extends Capitalize<F> ? `${Uncapitalize<F>}-${KebabCase<R>}` : `${F}${KebabCase<R>}` : T
type KebabCase<T extends string> = T extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
  ? `${Uncapitalize<F>}${KebabCase<R>}`
  : `${Uncapitalize<F>}-${KebabCase<R>}`
  : T;