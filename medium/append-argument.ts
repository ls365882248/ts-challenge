export {};
type Fn = (a: number, b: string) => number

type AppendArgument<
  Fn extends Function, A
> = Fn extends (...args: infer T) => infer U
  ? (...args: [...T, A]) => U
  : Fn

type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number