// object declaration using literal and contructor
// singelton   Object.create
// contructor singelton banega 

// object literals 

// object creation
// declaring a symbol
// +++++++++++ iterview important +++++++++++++++
// declare a symbol and used as key

// const mySym = Symbol("key1");

// const JsUser = {
//      name:"rekha",
//     "full name": "rekha thakur",
//     age:"20",
//     [mySym]:"new symbol key",
//     location:"seoni",
//     email:"youAremine@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:["moday","Saturday"]
// }

// access objecst value
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["full name"]);


// console.log(JsUser[mySym]);

// CHANGING OBJECT KEYS VALUES
// JsUser.email = "rrekhathakur";
// console.log(JsUser.email);

// FREEZE THE OBJECT THEN CHANGE THE VALUE OF OBJECTS KEY

// Object.freeze(JsUser);

// JsUser.email = "shobha thakur ";
// console.log(JsUser.email);

// after freezing value of object not changing anymore

// console.log(JsUser);

// FUNCTIONS IN OBJECTS

// JsUser.greeting = () => {
//     console.log("hello world");
// }

// console.log(JsUser.greeting());

// console.log(JsUser.greeting);

// JsUser.greetingTwo = function() {
//     console.log(`my name is, ${this.name}`);
// }
// console.log(JsUser.greetingTwo());

// console.log(JsUser.greetingTwo);



// &&&&&&&&&&&&&&&&&&&&&& OBJECT PART 2 

// object singelton
// object create
// constructor

// singletone object

// const tinderUser = new Object();

// tinderUser.name = 'rekha thakur';
// tinderUser.id = "re234";
// tinderUser.isLogedIn = false;


// const regularUser = {
//     email:"rekjlahjhjlh@gmail.com",
//     fullName:{
//          usefullname:{
//             fistname:"rekha",
//             lastname:"thakur",
//          }
//     }
// }


// ++++++++++++++++++++++++ Objects Destructuring +++++++++++++++++++++++++++

// const course ={
//     name:"js",
//     price:"999",
//     teacher:"sk tiwari",
//     channelName:"youtube"
// }

// const {name,price,teacher,channelName}=course;
// console.log(price);

