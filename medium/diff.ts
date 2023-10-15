type Diff<O, O1> = Omit<O & O1, keyof (O | O1)>

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type result = keyof (Foo | Bar) // "name" | "age"

type Key = Diff<Foo, Bar>;