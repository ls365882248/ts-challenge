interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

// type ObjectEntries<T, K = keyof T> =  [K, T[K]];

type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, RemoveUndefined<T[K]>]
}[keyof T]