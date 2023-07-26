class Product{
    // san =10;
    #name;
    #rating;
    constructor(n,r){
        this.#name = n;
        this.#rating = r;

    }
    display(){
        console.log('The name and rating are: ',this.#name,this.#rating)
    }
}

let p1 = new Product('Nikitha',5);

// console.log(p1)
// p1.display()
// console.log(p1.san)
console.log(p1)
p1.name = 'san'
console.log(p1.name)
p1.display()