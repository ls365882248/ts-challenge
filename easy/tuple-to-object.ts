const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
const T = typeof tuple;

// type TupleToObject<T extends( string | number | symbol)[]> = {
//   [key in T[number]]: key;
// }

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [key in T[number]]: key;
}

type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

export {};