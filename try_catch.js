function isPrime(x){
    try{
        // console.log('starting')
        for(let i = 2; i<= x-1;i++)
        {
            if(x % i == 0){
            throw new Error('Not Prime');
        }
            
        }
      
     return 'Prime';


    }
    catch(err){
        console.log('Handled',err)
    }
    finally{
        console.log('End')
    }
}
isPrime(10)