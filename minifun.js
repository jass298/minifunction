// const myFunction = (a, b) => {
//  return   a * b;

// }
// console.log(myFunction());


// task 1

function countvowels( str){
    let person =    prompt("enter number here");
   let count = 0; 
      for(const char of str) {
   
   
   
    if(char === "a"||
       char === "e"||
       char === "u"||
       char === "o"||
       char === "i"){
       count ++
       }
   }
       console.log(person);
       console.log( count);
       
   }
   
   
   // task 2  to print value of array
   
    let khus = [" majha " , "malwa" , "duaba"] ;
   khus.forEach( (val ,idx , ) =>  {
       console.log(val , idx , );
   });
   
   // task3 
   
    let number =[2,3,4,5,6];
     number.forEach((num) => {
       console.log(num *num);
     });
   
   
   
   // task 4 FILTER  ....this makes new array without affects the old array.
   
   let arr = [ 1,2,3,4,5] ;
   
   let evenarr =arr.filter((val) =>{
       return val %2 ===0;
   })
   console.log( evenarr);
   
   
   
   //  task 5 map ..result are used to form new arrray
   
   
   
   let nums= [ 6 , 5, 3];
   let newarr = nums.map((val) => {
   return val* val ;
   });
   console.log( newarr);
   
   let calcSquare = (num) => {
       console.log(num *num); 
   }
   console.log( calcSquare);
   
   // task 6
    
   
   let n = prompt("enter a number:");
    
   let array = [];
    for ( let i=1 ; i <= n ; i++){
       array[i -1] = i ;
    }
    console.log(array);
   
   
   // anonyoms function
   
let z = function(x,y)
{
    let area= x*y ;
    return area;
    
}
let length = prompt("enter the length"); 
let width = prompt("enter the width"); 

document.getElementById("output").innerHTML = z(length ,width);
