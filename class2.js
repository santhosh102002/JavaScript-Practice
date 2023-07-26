// creating blueprint without using class but using function

function Product1(n,m){
    this.n = n;
    this.m = m;
}

const p = new Product1(1,2)
console.log(p)

// const product2 = (n,m) =>{
//     this.n = n;
//     this.m = m;
// }
// const p2 = new product2(1,2)
// console.log(p2)             // Arrow functions are not allowed to create the blueprint

 let obj = {
    x:20, y :30,
    display(){
        console.log('Display method');
    }
  

}

obj.display()