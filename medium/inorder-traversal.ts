const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type InOrderTraversalA = InOrderTraversal<typeof tree1> // [1, 3, 2]
type InOrderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InOrderTraversal<T['left']>, T['val'], ...InOrderTraversal<T['right']>]
  : [];
