type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }

type PickByType<T, U> = {
  [key in keyof T as T[key] extends U ? key : never]: T[key]
};

// 先声明一个 key 变量出来 key in keyof T 
// 然后根据这个 key，去推断 T[key] 的类型