type FlipA = Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
type FlipB = Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
type FlipC = Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

type Flip<T extends Record<string, string | number | boolean>> = {
  [P in keyof T as `${T[P]}`]: P
}

// P in keyof T 拉出一个可供 T[P] 使用的类型
