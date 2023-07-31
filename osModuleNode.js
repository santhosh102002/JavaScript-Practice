const os = require('os');

console.log('The arch is :',os.arch());
console.log('The free memory is :',os.freemem());
console.log('The Total memory is :',os.totalmem());
console.log('The network interfaces is :',JSON.stringify(os.networkInterfaces()));
console.log('The release is :',os.release());
console.log('The platform is :',os.platform());
console.log('The hostname is :',os.hostname());
console.log('The type is :',os.type());
console.log('The endianness is :',os.endianness());