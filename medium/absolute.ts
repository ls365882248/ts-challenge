type Test1 = -100
type Absolute<T extends number> = `${T}` extends `-${infer R}` ? R : `${T}`;
type Result1 = Absolute<Test1> // expected to be "100"

// 核心解法是，是将 T 转换为字符串，然后检查字符串前面是否有 -。 如果有，则返回 - 之后的字符串，否则返回已转换为字符串的 T。