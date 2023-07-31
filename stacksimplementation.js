class Stack{
    #arr;
    constructor(){
       this.#arr = [];
    }
    push(n){
         this.#arr.push(n)
    }
    pop(){
        this.#arr.pop();
    }
    top(){
        if(this.#arr.length == 0){ return undefined;}
       return this.#arr[this.#arr.length -1];
    }
}

let s = new Stack();
s.push(10);
s.push(9);
console.log(s.top());
s.pop();
console.log(s.top())
s.pop();
console.log(s.top())