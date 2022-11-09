// 离谱

type MyMultiply<T, U> = {}
type T0 = MyMultiply<2, 3> // '6'
type T1 = MyMultiply<3, '5'> // '15'
type T2 = MyMultiply<'4', 10> // '40'
type T3 = MyMultiply<0, 16> // '0'
type T4 = MyMultiply<'13', '21'> // '273'
type T5 = MyMultiply<'43423', 321543n> // '13962361689'

export {};