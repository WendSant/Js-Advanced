

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

// function ola() {
//     console.log("olá");
// }

// function saudacao(s, n) {
//     s();
//     console.log(n)
// }

// saudacao(ola,"Wendson");

// let usuarios = ["Marcos","Gustavo","Brenbo"];

// function inserirUsuario(nome, callback) {

//     setTimeout(() => {usuarios.push(nome);
//                         callback()
//                     }, 100);
// }

// function lsUsers() {
//     console.log(usuarios);
// }

// inserirUsuario("Wendson", lsUsers);

// Promises

// let usuarios = ["Marcos","Gustavo","Brenbo"];

// function inserirUsuario(nome) {

//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(() => {usuarios.push(nome);

//         let error = false;

//         if(!error) {
//             resolve();
//         }else {
//             reject({ msg: "Error"});
//         }

//         }, 100);
//     })
//     return promise;

    
// }

// function lsUsers() {
//     console.log(usuarios);
// }

// inserirUsuario("Iagoa").then(lsUsers).catch((error) => {
//     console.log(error.msg)
// });

// Async await 
// let usuarios = ["Marcos","Gustavo","Brenbo"];

// function inserirUsuario(nome) {

//     let promise = new Promise((resolve, reject) =>{
//         setTimeout(() => {usuarios.push(nome);

//         let error = false;

//         if(!error) {
//             resolve();
//         }else {
//             reject({ msg: "Error"});
//         }

//         }, 100);
//     })
//     return promise;

    
// }

// function lsUsers() {
//     console.log(usuarios);
// }

// async function exec(){
//     await inserirUsuario("Wend");
//           lsUsers();
// }

// exec();



// Filter

// function newStudent(nome, idade){
//     return {nome, idade}
// }

// let students = [
//         newStudent("Wendson", 21),
//         newStudent("Marcos", 21),
//         newStudent("Eduardo", 19),
//         newStudent("Gustavo", 19)
// ];

// let players = [
//     newStudent("CArlos", 21),
//     newStudent("Brenno", 21),
//     newStudent("Kyara", 19),
//     newStudent("Ster", 19)
// ];

// function haveUnderTwenty(student){
//     return student.idade < 20;
// }

// function haveOverTwenty(student){
//     return student.idade > 20;
// }

// let studentsMoreTwenty = students.filter(haveUnderTwenty);
// let studentsOverTwenty = students.filter(haveOverTwenty);

// console.log(studentsUnderTwenty);
// console.log(studentsOverTwenty);



//  for(let student of students){
//         if(student.idade < 20){
//             console.log(student.nome);
//         }
//  }


// Map


function newStudent(nome, idade){
    return {nome, idade}
}

let students = [
    newStudent("Wendson", 21),
    newStudent("Marcos", 21),
    newStudent("Eduardo", 19),
    newStudent("Gustavo", 19)
];


function stundentsFiveYears(student){
    return {
        nome: student.nome,
        idade: student.idade + 5
    }
}

console.log(students.map(stundentsFiveYears));

