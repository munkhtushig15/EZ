// const day = Math.floor(Math.random(1) * 8);

// function whatDay() {
//     if (day == 1){
//         console.log ("Monday")
//     }
//     else if (day == 2){
//         console.log ("Tuesday")
//     }
//     else if (day == 3){
//         console.log ("Wednesday")
//     }
//     else if (day == 4){
//         console.log ("Thursday")
//     }
//     else if (day == 5){
//         console.log ("Friday")
//     }
//     else if (day == 6){
//         console.log ("Saturday")
//     }
//     else if (day == 7){
//         console.log ("Sunday")
//     }
//     else {
//         console.log("error")
//     }
// }

// whatDay ();



// function whatDay(grade) {
//     if (grade == 100){
//         console.log ("NICE")
//     }
//     else if (grade <= 99 && grade >= 90){
//         console.log ("A")
//     }
//     else if (grade <= 89 && grade >= 80){
//         console.log ("B")
//     }
//     else if (grade <= 79 && grade >= 70){
//         console.log ("C")
//     }
//     else if (grade <= 69 && grade >= 60){
//         console.log ("D")
//     }
//     else if (grade <= 59 && grade >= 0){
//         console.log ("nt")
//     }
//     else{
//         console.log ("Iim dun bhgui e bndi min")
//     }
// }

// whatDay(Math.floor(Math.random(0) * 201));




// function whatDay(num1, op, num2) {
//     if (op == "+"){
//         console.log(num1 + num2)
//     }
//     else if (op == "-"){
//         console.log (num1 - num2)
//     }
//     else if (op == "*"){
//         console.log (num1 * num2)
//     }
//     else if (op == "/"){
//         console.log (num1 / num2)
//     }
//     else if (op == "%"){
//         console.log (num1 % num2)
//     }
//     else {
//         console.log ("error")
//     }
// }

// whatDay(4, "/", 8);


// function whatDay(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3 && num2 > num3){
//         console.log(num1, num2, num3)
//     }
//     else if (num1 > num2 && num1 > num3 && num2 < num3){
//         console.log(num1, num3, num2)
//     }
//     else if (num2 > num1 && num2 > num3 && num1 > num2){
//         console.log(num2, num1, num3)
//     }
//     else if (num2 > num1 && num2 > num3 && num3 > num1){
//         console.log(num2, num3, num1)
//     }
//     else if (num3 > num1 && num3 > num2 && num1 > num2){
//         console.log(num3, num1, num2)
//     }
//     else if (num3 > num1 && num3 > num2 && num2 > num1){
//         console.log(num3, num2, num1)
//     }
// }

// whatDay(1, 8, 2);

function nickname(name) {
    return `${name}`
};

const nameRn = nickname("Bayra");

console.log("Sain u" , nameRn);

