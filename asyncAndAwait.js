function returnDummyPromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log('Timer completed');
            resolve('Done')
        },10000)
    })
}

async function consume(){
    console.log('Start');
    const p = await returnDummyPromise();
    console.log('the response is '+p)
}

console.log('Hii');
consume();
console.log('Ending')

async function random(){
    return 10;
}
console.log(random())
