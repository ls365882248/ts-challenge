const foo = (arg1: string, arg2: number): void => {}
// ***

type typeFoo = typeof foo;

type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never;

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
export {};