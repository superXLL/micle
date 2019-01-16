var Tree = (function () {
    var Node = /** @class */ (function () {
        function Node(thekey) {
            this.key = thekey;
            this.left = null;
            this.right = null;
        }
        return Node;
    }());
    var BinarySearchTree = /** @class */ (function () {
        function BinarySearchTree() {
            this.root = null;
        }
        // 插入：向二叉树插入一个新的键
        BinarySearchTree.prototype.add = function (key) {
            var newNode = new Node(key);
            if (this.root === null) {
                this.root = newNode;
            }
            else {
                this.insertNode(this.root, newNode);
            }
        };
        BinarySearchTree.prototype.insertNode = function (node, newNode) {
            if (newNode.key < node.key) {
                if (node.left === null) {
                    node.left = newNode;
                }
                else {
                    this.insertNode(node.left, newNode);
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                }
                else {
                    this.insertNode(node.right, newNode);
                }
            }
        };
        // 查询：在二叉树查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
        BinarySearchTree.prototype.hasValue = function (key) {
            console.log(this.searchNode(this.root, key));
            return this.searchNode(this.root, key);
        };
        BinarySearchTree.prototype.searchNode = function (node, key) {
            if (node === null) {
                return false;
            }
            if (key < node.key) {
                return this.searchNode(node.left, key);
            }
            else if (key > node.key) {
                return this.searchNode(node.right, key);
            }
            else {
                return true;
            }
        };
        // 升序输出
        BinarySearchTree.prototype.print = function (callback) {
            this.printNode(this.root, callback);
        };
        BinarySearchTree.prototype.printNode = function (node, callback) {
            if (node !== null) {
                this.printNode(node.left, callback);
                callback(node.key);
                this.printNode(node.right, callback);
            }
        };
        BinarySearchTree.prototype.min = function () {
            return this.minNode(this.root);
        };
        BinarySearchTree.prototype.minNode = function (node) {
            if (node) {
                while (node && node.left !== null) {
                    node = node.left;
                }
                return node.key;
            }
            return null;
        };
        ;
        // 删除：从树中移除某个键
        BinarySearchTree.prototype.remove = function (element) {
            if (this.hasValue(element)) {
                this.root = this.removeNode(this.root, element);
                console.log("已经删除节点:" + element);
            }
            else {
                console.log("不存在节点:" + element + '请从新输入');
            }
        };
        BinarySearchTree.prototype.findMinNode = function (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node;
        };
        BinarySearchTree.prototype.removeNode = function (node, element) {
            if (node === null) {
                return null;
            }
            if (element < node.key) {
                node.left = this.removeNode(node.left, element);
                return node;
            }
            else if (element > node.key) {
                node.right = this.removeNode(node.right, element);
                return node;
            }
            else {
                if (node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                if (node.left === null) {
                    node = node.right;
                    return node;
                }
                else if (node.right === null) {
                    node = node.left;
                    return node;
                }
                var aux = this.findMinNode(node.right);
                node.key = aux.key;
                node.right = this.removeNode(node.right, aux.key);
                return node;
            }
        };
        ;
        return BinarySearchTree;
    }());
    return BinarySearchTree;
})();
var tree = new Tree();
var arrss = [];
tree.add(11);
tree.add(6);
tree.add(13);
tree.add(5);
tree.add(3);
function printNodes(value) {
    arrss.push(value);
    console.log(arrss);
}
tree.print(printNodes);
tree.remove(1);
tree.remove(5);
tree.hasValue(11);
