// By using static before the function inside the class, the function can be used from outside of the class without 
// creating the object

// class Product{
//     constructor(){
//         console.log('Constructor is called');
//     }
//     display(){
//         console.log('This is Display method');
//     }
// }

// Product.display()

// The above Product.display() throws the error. because we are trying to call the function in a class without
// creating the object. we are trying to access the display method/function by using class\

class Product{
    constructor(){
        console.log('Constructor is called');
    }
     static display(){    // By using static we can access the display method directly by using the class name
        console.log('This is Display method');
    }
}

Product.display()