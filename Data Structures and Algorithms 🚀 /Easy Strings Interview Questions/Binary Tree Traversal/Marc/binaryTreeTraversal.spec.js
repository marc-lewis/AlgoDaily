import { inOrderTraversal } from "./binaryTreeTraversal";

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// Regular binary trees
var tree1 = new Node(4);
tree1.left = new Node(1);
tree1.right = new Node(3);

var tree2 = new Node(5);
tree2.left = new Node(10);
tree2.left.left = new Node(17);
tree2.left.right = new Node(3);
tree2.right = new Node(8);

// Binary search trees
var tree3 = new Node(6);
tree3.left = new Node(3);

var tree4 = new Node(5);
tree4.left = new Node(3);
tree4.left.left = new Node(2);
tree4.left.left.left = new Node(1);

var tree5 = new Node(8);
tree5.left = new Node(6);
tree5.right = new Node(9);
tree5.left.left = new Node(5);
tree5.left.right = new Node(7);
tree5.right.right = new Node(10);

describe("inOrderTraversal", () => {
  it("should return [3, 6] for tree3", () => {
    expect(inOrderTraversal(tree3)).toStrictEqual([3, 6]);
  });

  it("should return [17, 10, 3, 5, 8] for tree2", () => {
    expect(inOrderTraversal(tree2)).toStrictEqual([17, 10, 3, 5, 8]);
  });
});