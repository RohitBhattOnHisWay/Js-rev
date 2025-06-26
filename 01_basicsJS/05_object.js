// objects literals 
// use symbol in objects
const mysym=Symbol("Keys")
const JsUser ={
   "full name":"ROhit ",
   [mysym]:"new keys",
    age:18,
    location:"Rohitbhatt.1035622@gmail",
    isLoggedIn: false
}
//console.log(JsUser.name);
// seconf way
console.log(JsUser["full name"]);//so yeh vh peh usefull hai
console.log(typeof JsUser[mysym]);//symbol console
// updation in js 
JsUser.age=38
//Object.freeze(JsUser)//no futher changes occur
JsUser.age=100
console.log(JsUser.age);
console.log(JsUser);
//2things--->>adding function to object
JsUser.greeting=function(){
    console.log("Hello rohit");
}
console.log(JsUser.greeting());
//want to refence same object member 
JsUser.greetingTwo=function(){
    console.log(`Hello bro ${this["full name"]}`);
}
console.log(JsUser.greetingTwo());