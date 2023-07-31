function returnDummyPromise(){
    return  new Promise(function exec(resolve,reject){
        //write your code here
        setTimeout(function f(){
            console.log('Timer completed');
            let random = Math.random()
            if (random > 0.5)
                resolve('Done');
            else 
               reject('Error')
        },0);
    })
}

let p = returnDummyPromise();
p.then(function exec(val){
    console.log('Promise resolved with ',val);
})
// p.then(function exec(val){
//     console.log('Promise registered call back',val);
// })
.catch(function exec(val){
    console.log('Error occured ',val)
})
.finally(function exec(val){
    console.log('Finnaly')
})