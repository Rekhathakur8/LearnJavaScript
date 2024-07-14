
// immediately invoked function expression

// as you write the function you want to run it at that moment

// two main reasons of using iifi are
// prevent from global scop polution + immendiatly run 

//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined

//AVOID POLLUTING THE GLOBAL NAMESPACE

// example 1

// global polution 

//  var arra = [];
// for (var i = 0; i < 2003000; i++) {
//     arra.push(i * i + i);
//    }


// using iffi avoiding global polution
// (
//     function chai(){
//         var arra = [];
//         for (var i = 0; i < 2003000; i++) {
//         arra.push(i * i + i);
// }
//     }
// );


// (
//     ()=>{
//          var arra = [];
//    for (var i = 0; i < 2003000; i++) {
//    arra.push(i * i + i);
// }
//     }
// );

(
    function chai(name){
        console.log(`${name}`)
    }
)("rekha");


