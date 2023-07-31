class Product{
    #name;
    rating;
    constructor(n,r){
        this.#name = n;
        this.rating = r;

 }
 getName(){
    // return this.#name;
    console.log(' The name is: ',this.#name)
 }
 setName(name){
  this.#name = name;
 }
display(){
    console.log('The name and rating are:',this.#name, this.rating);
}

}
let p1 = new Product("santhosh",100);
console.log(p1)
p1.display()
p1.getName()
p1.setName('Nikitha')
p1.display()
p1.getName()
p1.rating = 106
p1.display()