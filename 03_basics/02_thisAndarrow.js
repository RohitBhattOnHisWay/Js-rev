const user = {
    username: "Rohit bhatt",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username},welcome to website`);
    }
}
// so intead of use long syntax we use arrow function
function arroweg() {
    console.log("hii from arrow function:::..");

}
const add = (num1, num2) => num1 + num2//this is used when you have only one line of statement to retrun
console.log(add(2,4));
arroweg();
//Intermediately Invoked function Expression (IIFE)
(function chai(){
    console.log("DB connected")
})();//two to pretect form global garbage
(()=>{
console.log("Hii form IIFE arrow ffunction:")
})();

