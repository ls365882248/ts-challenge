type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void> 
// (arg0: boolean, arg1: number, arg2: string) => void

type FlipReverse<T extends unknown[]> = T extends [infer F, ...infer R] ? [...Reverse<R>, F] : [];

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer U 
? (...args: FlipReverse<P>) => U
: never;