var Node = function(val, next) {
  this.val = val;
  this.next = next;
}
var printList = function(node) {
  if (!node) return;

  console.log(node.val);
  printList(node.next);
}

var reverseList = function(node) {
  if (!node.next) return node;
  var nodeNext = node.next;
  var nodeNextNext = node.next.next;
  nodeNext.next = node;
  nodeNext = node.next;
  nodeNextNext
  reverseList(node.next);
}
var six = new Node(6, null);
var five = new Node(5, six);
var four = new Node(4, five);
var three = new Node(3, four);
var two = new Node(2, three);
var one = new Node(1, two);

printList(one)
