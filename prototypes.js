let myHeros = ['Ironman','Captian America'];
let dcHeros = ['Batman','Superman'];

let superHeros = {
    Ironman:'Iron',
    Spiderman:'Sting',
    getSpiderMan: function(){
        console.log("The Spider is "+this.Spiderman);
    } 
}

Object.prototype.san = function(){
    console.log('Hii to object')
}
console.log(superHeros.san())
console.log(myHeros.san())

Array.prototype.sanTHosh = function(){
    console.log('Hi to array');


}

console.log(myHeros.sanTHosh())
console.log(superHeros.sanTHosh())  // Throws the error because it is referring the object 

