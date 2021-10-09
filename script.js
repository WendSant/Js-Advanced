

// This and bind

// function speakGeneric() {
//     console.log(this.sound);
// }

// let dog = {
//         sound: "Au au",
//         speak: speakGeneric
// }
// let cat = {
//     sound: "Miau",
//     speak: speakGeneric
// }

// let bindedFunction = speakGeneric.bind(dog);

// bindedFunction();

// Arrow functions

// let arrowFunctions = x => 2 * x;

// let arrowFunctions2 = function (x) {
//     return 2 * x;
// }


// let arrowFunctions3 = function () {
//     return 2 * this.x;
// }

// let numeroArrow = {
//     x: 8,
//     d: arrowFunctions3
// }



// console.log(numeroArrow.d());

function ola() {
    console.log("olá");
}

function saudacao(s, n) {
    s();
    console.log(n)
}

saudacao(ola,"Wendson");