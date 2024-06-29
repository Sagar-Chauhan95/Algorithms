class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.size ===0){
            this.first = newNode;
            this.last = newNode;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(this.size === 0){
            return undefined;
        }

        let node = this.first;
        if(this.first === this.last){
            this.last = null;
        }else{
            this.first = node.next;
        }
        this.size--;
        node.next = null;
        return node.value;
    }

}

const stack = new Stack();
stack.push(1)
stack.push(5)
stack.push(15)
stack.push(2)
stack.push(21)
stack.push("dog")
console.log(stack)

console.log(stack.pop())