
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Inserting new Node or data
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    removeData(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        // if root is null
        if (node === null) {
            return null;
        } else {
            if (key < node.data) {
                node.left = this.removeNode(node.left, key);
                return node;
            } else if (key > node.data) {
                node.right = this.removeNode(node.right, key);
                return node;
            } else {
                // deleting node with no children
                if (node.left === null && node.right === null) {
                    return null;
                }

                // deleting node with one children
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                }

                // deleting node with two children
                let aux = this.findMinNode(node.right);
                node.data = aux.data;

                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }

    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(50);
binarySearchTree.insert(25);
binarySearchTree.insert(75);
console.log(binarySearchTree);