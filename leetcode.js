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

const { finished } = require("stream");


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

//                        ---`PROBLEM 3`---
//                         --level: easy--
//                --`Apply Transform over each Element`--
//                        --LEETCODE PROBLEM--

/*
let newArray = []
const map = function(arr,fn){
    return fn(arr);
};

function plusone(arr){
    for(let i=0;i<arr.length;i++){
        newArray.push(arr[i]+1);
    };
    return newArray;
};

function plus(arr){
    for(let j=0;j<arr.length;j++){
        newArray.push(arr[j]+j);
    };
    return newArray;
};
function constant(c){
    for(let k=0;k<arr.length;k++){
        newArray.push(c);
    };
    return newArray;
};
*/
// let arr = [1,3,5]
// const n = map(arr,plusone);
// console.log(n);
// const n = map(arr,plus);
// console.log(n);
// let con =45
// const n = map(con,constant);
// console.log(n)
