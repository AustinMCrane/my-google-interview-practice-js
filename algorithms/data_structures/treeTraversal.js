var Node = function(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
var postOrder = function(node) {
  if (!node) return;
  postOrder(node.left);
  console.log(node.val)
  postOrder(node.right);
}
var preOrder = function(node) {
  if (!node) return;
  postOrder(node.right);
  console.log(node.val);
  postOrder(node.left);
}
var four = new Node(4, null, null);
var five = new Node(5, null, null);
var six = new Node(6, null, null);
var seven = new Node(7, null, null);
var three = new Node(3, five, four);
var two = new Node(2, six, seven);
var one = new Node(1, two, three);
console.log('----- Post Order ------');
postOrder(one);
console.log('----- Pre Order ------')
preOrder(one)
