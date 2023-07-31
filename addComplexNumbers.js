class Complex{
    #real;
    #img;
    constructor(r,i){
        this.#real = r;
        this.#img = i;
    }
    get real(){
        return this.#real;

    }
    get img(){
        return this.#img;
    }
    addComplexNumber(c){
        this.#real += c.real;
        this.#img += c.img;
    }
    display()
    {
        console.log(this.#real+'+i'+this.#img);
    }
}

let c1 = new Complex(5,2);
let c2 = new Complex(4,2);
c1.addComplexNumber(c2);
c1.display()