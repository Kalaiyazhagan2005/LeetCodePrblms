const fun = (v)=>{
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

fun(4).toBe(3); // false
fun(3).toBe(3); // true
fun(5).toBe(null);//false
fun(3).notToBe(3);//false
fun(3).notToBe(4);//true
