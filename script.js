

// This and bind

function speakGeneric() {
    console.log(this.sound);
}

let dog = {
        sound: "Au au",
        speak: speakGeneric
}
let cat = {
    sound: "Miau",
    speak: speakGeneric
}

let bindedFunction = speakGeneric.bind(dog);

bindedFunction();