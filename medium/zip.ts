type exp = Zip<[1, 2], [true, false]> // expected to be [[1, true], [2, false]]

// nice

type Zip<A extends any[], B extends any[], L extends any[] = []> = L['length'] extends A['length'] | B['length']
  ? L
  : Zip<A, B, [...L, [A[L['length']], B[L['length']]]]>