// There are two approachs in the file system: synchronous, asynchronous

const fs = require('fs');
const { buffer } = require('stream/consumers');

// ASYNCHRONOUS APPROACH

// console.log('Before the fs.readFile')
// fs.readFile('input.txt',(err,data)=>{
//     if(err){
//         console.log('The error is',err)
//     }
//     console.log('data',data.toString())
//     console.log('During the fs.readFile')
// })
// console.log('After the fs.readFile');


// SYNCHRONOUS APPROACH

// console.log('Before reading the file')
// const data = fs.readFileSync('input.txt')
// console.log('Data',data.toString())
// console.log('After the reading of file')
 
//--------------------------------------------------------------------

// ANOTHER METHOD: OPENING A FILE + READING AND CLOSING THE FILE -- low level method

// const buff = new Buffer(1024);

// fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         console.log("The error is "+err);
//     }
//     console.log("The file opened successfully");
//     fs.read(fd,buff,0,buff.length,0,function(err,bytes){
//         if(err){
//             console.log('The error occured');
//         }
//         console.log('The data is '+buff.slice(0,bytes).toString())
//         fs.close(fd,function(err){
//             if(err){
//                 console.log('The error occured at closing the file')
//             }
//             console.log('The file is closed')
//         })
//     })
// })

// ---------------------------------------------------------------------------

// WRITING IN THE FILE

// fs.writeFile('input.txt','Updated by Santhosh Kumar',function(err){
//   if(err){
//     console.log('The error occured');
//   }
//   console.log('The writing into file is done');
// })  // it is asynchronous type 

// fs.writeFileSync('input.txt','Updated by Santhosh Kumar Kadiyam')

// -------------------------------------------------------------------- 

// APPENDING A FILE

// fs.appendFile('input.txt',' - MVSR Engineering College','utf-8',function(err){
//     if(err){
//         console.log('The error is '+err)
//     }
//     console.log('The appending is done');
// }) // -- async model

// fs.appendFileSync('input.txt',' - Hyderabad','utf-8'); // -- sync model

// --------------------------------------------------------------------------

// DELETING A FILE 

fs.unlink('input.txt',function(err){
    if(err){
        console.log('The error occured in deleting');
    }
    console.log('The deleting the file is done')
})