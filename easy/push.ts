type MyPush<T extends any [], U> = [...T, U];
type Result = MyPush<[1, 2], '3'> // [1, 2, '3']
export {};