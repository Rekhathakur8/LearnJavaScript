 
// check the op of this inside a function 


// function chai(){
//     console.log(this);
// }
// chai();

// return a global object

// using this for accesing some variable inside function

// function chai(){
//     const username="rekha thakur";
//     console.log(this.username);
// }
// chai();

// return undefined
// ** conclusion ** --- we can not use this keyword inside function for accessign variable inside function


// ***************  ARROW FUNCTION ***********

// const chai = () => {
   
//     console.log(this);
// }
// chai();

// empty object 

// const chai = () => {
//     const username = "rekha thakur";
//     console.log(this.username);
// }
// chai();

// undefined


// **** PURE ARROW FUNCTION *** 

// const chai = (num1,num2)=> {
//     return num1 * num2;
// }


// const chai = (num1,num2)=> num1 * num2;

// const chai = (num1,num2)=> (num1 * num2);

const chai = ()=> ({username : "rekha thakur"});


console.log(chai());
