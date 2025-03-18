// TO BE OR NOT TO BE.leetcode problem ,level: easy
// Write a function that takes a value and return an object with two methods toBe and notToBe
// toBe method should return true if the value is equal to the value passed to the function and false otherwise
// notToBe method should return true if the value is not equal to the value passed to the function and false otherwise
// Example
// fun(4).toBe(3); // false
// fun(3).toBe(3); // true  
/*const fun = (v)=>{
     return{
         toBe:(val)=>{
              if(val === v){
                return true
              }else{
                 throw new Error("Not Equal");}
             },
         notToBe:(val)=>{
             return val !==v? true:"Equal";
         } 
     }
    
 }
*/
// console.log(fun(4).toBe(3)); false
// console.log(fun(3).toBe(3)); true
// console.log(fun(3).notToBe(3)); false
// console.log(fun(4).notToBe(3)); true
// console.log(fun(4).notToBe(4)); false
// console.log(fun(3).notToBe(4)); true


