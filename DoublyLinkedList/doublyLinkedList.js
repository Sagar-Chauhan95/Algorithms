class Node{
    constructor(val){
        this.prev = null;
        this.next = null;
        this.val = val;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0){
            return undefined;
        }
        let node = this.tail;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }

    shift(){
        if(this.length === 0){
            return undefined;
        }
        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = node.next;
            this.head.prev = null;
            node.next = null;

        }
        this.length--;
        return node;
    }

    unshift(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
       if(index < 0 || index >= this.length){
        return null;
       }
       let counter;
       let current;
       if( index <= this.length/2){
        console.log("In top")
        current = this.head;
        counter =0;
        while( index !== counter ){
            current = current.next;
            counter++;
        }
       }else{
        console.log("In bottom")
        current = this.tail;
        counter =this.length-1;
        while(index !== counter){
            current = current.prev;
            counter--
        }
       }
       return current;
    }

    set(index, val){
        let node = this.get(index);
        if(!node){
            return false;
        }else{
            this.val = val;
            return true;
        }
    }

    insert(index, val){
        if(index < 0 || index >= this.length){
            return false;
        }
        if(this.length === 0){
            return !!this.unshift(val);
        }
        if(index === this.length){
            return !!this.push(val);

        }

        let newNode = new Node(val);
        let prevNode = this.get(index-1);
        newNode.next = prevNode.next;
        newNode.prev = prevNode;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
        this.length++
        return true;
    }

    remove(index){
        if( index < 0 || index >= this.length){
            return undefined;
        }

        if(index === 0){
           return this.shift();
        }

        if(index === this.length-1){
           return this.pop();
        }

        let removed = this.get(index);
        removed.next.prev = removed.prev;
        removed.prev.next = removed.next;
        removed.next = null;
        removed.prev = null;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head;
        let prev = node.prev;
        let next = node.next;
        this.head = this.tail;
        this.tail = node;
        while(node){
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }

}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(5);
doublyLinkedList.push(10);
doublyLinkedList.push(15);
doublyLinkedList.push(3);
doublyLinkedList.push(19);
doublyLinkedList.push(6);
console.log(doublyLinkedList)

console.log(doublyLinkedList.get(3))
doublyLinkedList.insert(4, 29)
console.log(doublyLinkedList)

console.log(doublyLinkedList.pop())
console.log(doublyLinkedList)

console.log(doublyLinkedList.reverse())
