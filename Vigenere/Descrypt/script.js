'use strict';

const sentenceClear = [
    "Je suis la",
    "Chaque matin est une chance",
    "Fais de ton mieux",
    "Tout est possible",
    "Suis ta joie",
    "Ton sourire est un cadeau",
    "Je crois en toi",
    "Bouge quand tu penses trop",
    "Visualise ce que tu veux",
    "Aide quand tu le peux"
];

const keys = [
    "insa",
    "crypto",
    "cesar",
    "go",
    "hero",
    "naruto",
    "luffy",
    "toto",
    "mec",
    "foot"
];

const btnSubmit = document.querySelector(".btn__go");
const inputClear = document.querySelector(".clear__input");
const inputCipher = document.querySelector(".cipher__input");
const inputKey = document.querySelector(".key__input");
const index = Math.floor(Math.random() * 10);
const key = keys[index];
inputKey.textContent = key;
const clear = inputClear.textContent = sentenceClear[index];
const cipher = [];

const cryptMessage = function (message, key, cipher) {
    const size = key.length;
    
    // console.log(message.length);
    for (let i = 0; i < message.length; i++) {
        if ((message[i] >= 'a') && (message[i] <= 'z')) {      
            const element = (message[i].charCodeAt(0) + key[i % size].charCodeAt(0) - 2 * 'a'.charCodeAt(0)) % 26;
            // console.log("cas 1");
            cipher[i] = String.fromCharCode('a'.charCodeAt(0) + element);
        } else if ((message[i] >= 'A') && (message[i] <= 'Z')) {
            const element = (message[i].charCodeAt(0) + key[i % size].charCodeAt(0) - 'a'.charCodeAt(0) - 'A'.charCodeAt(0)) % 26;
            // console.log("cas 2");
            cipher[i] = String.fromCharCode('A'.charCodeAt(0) + element);
        } else {
            // console.log("cas 3");   
            cipher[i] = message[i];
        }
    }
    return cipher;
};

const compareSentence = function (str1, str2) {
    if (str1 === str2) {
        inputClear.value = "";
        alert("You're right");
    }
    else 
        alert("It's false");
};

inputCipher.textContent = cryptMessage(clear, key, cipher).join("");

const decryptCipher = function () {};

btnSubmit.addEventListener("click", function (e) {
    e.preventDefault();
    
    const myResult = (clear).toLowerCase();
    const userResult = (inputClear.value).trim().toLowerCase(); 
    compareSentence(myResult, userResult);
});

console.log(cryptMessage(clear, key, cipher).join(""));
console.log(key);
console.log(sentenceClear[index]);