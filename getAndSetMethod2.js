class Public{
    #name;
    rating;
    constructor(n,r){
      this.#name = n;
      this.rating = r;

    }
    get name(){
        console.log(this.#name);
    }
    set name(name){
        this.#name = name;
    }
    display(){
        console.log('The name and rating is :',this.#name,this.rating);
    }
}

let p = new Public('santhosh',100)
p.display()
p.name = 'nikitha'
p.display()
p.name
