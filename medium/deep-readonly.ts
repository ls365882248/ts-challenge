type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}


type MyDeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never ? T[key] :  MyDeepReadonly<T[key]>;
}

type Todo = MyDeepReadonly<X> // should be same as `Expected`

const ins: Todo = { 
  x: { 
    a: 1,
    b: 'hi'
  },
  y: 'hey'
}

export {};