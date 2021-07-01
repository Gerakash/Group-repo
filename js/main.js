let sum = 0;
let i = 0 ;
while(true){
     let request = +prompt('enter your number');
     if(request === 0 || request === null){
       break
     }else {
       alert('enter your number one more time')
     }
     sum +=+request 
     i++
   };
    console.log(i);
    console.log(sum);
    console.log(sum/i);


