class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size =0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(this.size ===0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode
        }
        return ++this.size;
    }

    dequeue(){
        if(this.size === 0){
            return undefined;
        }
        let node = this.first;;

        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }else{
            this.first = node.next;
        }
        this.size--;
        node.next = null;
        return node.value;


    }
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(10);
queue.enqueue(13);
queue.enqueue(5);
queue.enqueue('Dog');
console.log(queue)

console.log(queue.dequeue())