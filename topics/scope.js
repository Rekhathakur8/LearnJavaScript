// scope
// let var const
//{} are threated as scope if come with conditional statement or come with functions


// checking the scope
// if(true){
//      // let is a block scope variable 
//     // let a = 20;
//     // global scope
//     var b= 90;
//     // const is alos block scope
//     const c = 40;

// }

// // console.log(a);
// console.log(b);
// // console.log(c);

// let a=80;
// var b=40;
// const c=50;

// if(true){
//   a=20;
//  console.log(a);
 
//  console.log(c);
// }
// console.log(a);


// scops are different in vscode and browser 


//++++++++++++++
// childrens can take the icecream from there parents
// function one(){
//     let firstname="rekha";
//     function two(){
//         let lastName ="thakur";
//         console.log(firstname);
//     }
//    // console.log(lastName);
//    two();
// }

// one();


//other example

// if(true){
//     let name = "rekha";
//     if(name === "rekha"){
//         console.log(name);
//         let lastName="thakur";
    
//     }
//     //console.log(lastName);
// }



console.log(a());

function a(){
    return 10;
}
console.log(b);
const b = function(){
    return 20;
}