type ShiftResult = Shift<[3, 2, 1]> // [2, 1]

type Shift<T extends any[]> = T extends [infer L, ...infer R] ? R : never;