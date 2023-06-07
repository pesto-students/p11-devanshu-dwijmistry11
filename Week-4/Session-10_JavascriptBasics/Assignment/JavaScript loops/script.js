function drawTriangle(triangleSize) {

   // Your solution goes here
   let str='';
   for(let i=1; i<=triangleSize; i++){
      str='';
      for(let j=0;j<i;j++){
         str+='*'
      }
      console.log(str);
   }
}