class Product
{
  constructor(n,m){
    this.n = n;
    this.m = m;
    console.log('Constructor is called');
  }
  display(){
    console.log('This is display method');
  }
}
 const p = new Product(1,2);

console.log(p)
p.display()

