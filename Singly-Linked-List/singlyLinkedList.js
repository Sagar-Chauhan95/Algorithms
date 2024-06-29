class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // to add element to the end
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail= newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // to remove element from end
    pop(){
        if(!this.head){
            return undefined;
        }else{
            let current = this.head;
            let newTail = current;
            while(current.next){
                newTail = current;
                current = current.next;
            }

            this.tail = newTail;
            this.tail.next = null;
            this.length--;

            if(this.length ==0){
                this.head = null;
                this.tail = null;
            }
            return current;

        }
    }

    // to remove element from head
    shift(){
       if(!this.head){
        return undefined;
       }else{
        let current = this.head;
        this.head = current.next;
        this.length--;

        if(this.length === 0){
            this.tail = null;
        }

        return current;
       }

    }

    // to insert element at the head
    unshift(val){
        let newNode = new Node(val);
        this.length++;
        if(this.length==0){
            this.head = newNode;
            this.tail = this.head;
            return this;
        }else{
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
    }

    // to print element of mentioned index number
    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }else{

            let counter =0;
            let current = this.head;
            while( counter !== index){
                current = current.next;
                counter++;
            }
            return current;
        }
    }

    set(val, index){
        let node = this.get(index);
        if(!node){
            return false;
        }else{
            node.val = val;
            return true;
        }
    }

    insert(val, index){
        if(index < 0 || index >= this.length){
            return false;
        }

        if(index === this.length){
             return !!this.push(val);
        }

        if(index === 0){
            return !!this.unshift(val);

        }

        let prev = this.get(index-1);
        let newNode = new Node(val);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined;
        }

        if(index === this.length -1){
            return this.pop();
        }

        if(index === 0){
            return this.shift();
        }

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        while(node){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }

}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5);
singlyLinkedList.push(2);
singlyLinkedList.push(10);
singlyLinkedList.push(3);
singlyLinkedList.push(12);
singlyLinkedList.push(20);
console.log(singlyLinkedList);
console.log(singlyLinkedList.pop());
console.log(singlyLinkedList.shift());
console.log(singlyLinkedList.get(3));


