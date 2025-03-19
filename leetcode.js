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


/*     _________________________________________________________       */
/*     _________________________________________________________       */
                  
//                       ---`PROBLEM 2`---
//                        --level: easy--
//                       --`COUNTER PROGRAM-||`--
//                       --LEETCODE PROBLEM--


// Write a function that takes a value and return an object with three methods increment, decrement and reset
// increment method should increment the value by 1
// decrement method should decrement the value by 1
// reset method should reset the value to the original value passed to the function
/*     _________________________________________________________       */
/*     _________________________________________________________       */


/* counterProgram
const createCounter = (value)=>{
    let val = value;
    return{
        increment:()=>{
            return ++val;
        },
        decrement:()=>{
            return --val;
        },
        reset:()=>{
            val = value;
            return val;
        }
    }

};
const counter = createCounter(10);
console.log(counter.increment());//11
console.log(counter.decrement());//10
console.log(counter.reset());//10
*/

