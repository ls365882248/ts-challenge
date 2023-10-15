type Arr = ['1', '2', '3']

type MyTupleToUnion< T extends any[]> = T[number];

type Test = MyTupleToUnion<Arr> 

const test: Test = '3';

export {};