'use strict';

// Crypting
const letterCipher = {
    a: 'w',
    b: 'p',
    c: 't',
    d: 'u',
    e: 'v',
    f: 'x',
    g: 'q',
    h: 'f',
    i: 'c',
    j: 'k',
    k: 'a',
    l: 'h',
    m: 'z',
    n: 'i',
    o: 's',
    p: 'y',
    q: 'n',
    r: 'b',
    s: 'j',
    t: 'g',
    u: 'm',
    v: 'e',
    w: 'r',
    x: 'd',
    y: 'l',
    z: 'o',
};

const sentencesClear = [
    "je suis la",
    "chaque matin est une chance",
    "fais de ton mieux",
    "tout est possible",
    "suis ta joie",
    "ton sourire est un cadeau",
    "je crois en toi",
    "bouge quand tu penses trop",
    "visualise ce que tu veux",
    "aide quand tu le peux"
];

const sentencesCipher = [
    "kv jmcj hw",
    "tlwnmv zwgci vjg miv tfwitv",
    "xwcj uv gsi zcvmd",
    "gsmg vjg ysjjcphv",
    "jmcj gw kscv",
    "gsi jsmbcbv vjg mi iwuvwm",
    "kv tbscj vi gsc",
    "psmqv nwmiu gm yvijvj gbsy",
    "ecjmwhcjv tv nmv gm evmd",
    "wcuv nmwiu gm hv yvmd"
];

const labelSentence = document.querySelector(".app__sentences");
const labelSentenceCipher = document.querySelector(".app__cipher");
const labelSentenceClear = document.querySelector(".app__clear");
const containerLetters = document.querySelector(".letters");
const btnSubmit = document.querySelector(".app__btn__submit");
const btnReset = document.querySelector(".app__btn__reset");
const index = Math.floor(Math.random() * 10);
// let inputLetter = document.querySelectorAll(".lettre__input");

const generateSentenceCipher = function (index) {
    return sentencesCipher[index];
};

const generateSentenceClear = function (index) {
    return sentencesClear[index];
};

const splitSentence = (str) => str.replaceAll(" ", "").split("");

const sentenceCipher = generateSentenceCipher(index);
const sentenceClear = generateSentenceClear(index);
const splitSentenceClear = splitSentence(sentenceClear);
const splitSentenceCipher = splitSentence(sentenceCipher);

const displaySentenceCipher = function () {
    labelSentenceCipher.textContent = sentenceCipher;
}

const displaySentenceClear = function () {
    labelSentenceClear.textContent = sentenceClear;
    labelSentenceClear.classList.remove("hidden");
}

const displayLetters = function () {
    containerLetters.innerHTML = '';

    const letter = splitSentence(sentenceCipher);

    letter.reverse().forEach(element => {
        const html = `
            <section class="letters__row">
                <div class="case">
                    <p class="symbole lettre__cipher letter--normal">${element}</p>
                </div>
                <div class="symbole case"><p>:</p></div>
                <div class="case">
                <form class="form">
                    <input type="text" maxlength="1" class="symbole lettre__input letter--normal" />
                </form>
                    </div>
            </section>
        `; 
        containerLetters.insertAdjacentHTML('afterbegin', html);
    });
};

btnSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    
    checkSentence();
});

btnReset.addEventListener('click', function (e) {
    e.preventDefault();
    const inputLetter = document.querySelectorAll(".lettre__input");
    // console.log("Hey reset");
    inputLetter.forEach((element) => {
        element.value = '';
        element.classList.remove("letter--correct");
        element.classList.remove("letter--false");
        element.classList.add("letter--normal");
        labelSentence.classList.remove("letter--correct");
        labelSentence.classList.remove("letter--false");
        labelSentence.classList.add("letter--normal");
        labelSentenceClear.classList.add("hidden");
        displaySentenceCipher();
    });
});

const updateUI = function() {
    // displaySentenceClear();
    displaySentenceCipher();
    
    displayLetters();
};

updateUI();

// treat input by input
console.log(sentenceClear);
console.log(splitSentenceClear);

const checkLettre = function () {
    const inputLetter = document.querySelectorAll(".lettre__input");
    // let i = 0;
    // console.log("Hey reset"); 

    console.log("Debug 2");

    inputLetter.forEach((element, index) => {
        
        //console.log("Debug 3");
        console.log(element.value, index);

        if (element.value !== splitSentenceClear[index]) {
            element.classList.remove("letter--normal");
            element.classList.add("letter--false");
            element.value = ''; 
            console.log("Debug 4");           
        } else {
            element.classList.remove("letter--false");
            element.classList.remove("letter--normal");
            element.classList.add("letter--correct"); 
            console.log("Debug 5");  
        }
        // inputLetter[0].classList.remove("letter--false");
        // inputLetter[0].classList.add("letter--correct");
        // i++;
    });
}
// checkLettre();

const checkSentence = function () {
    const inputLetter = document.querySelectorAll(".lettre__input");
    
    let cipher = [];
    // let clear = sentencesClear[index].replaceAll(" ", "").split("");
    let clear = splitSentence(sentenceClear);
    
    inputLetter.forEach((element) => {
        cipher.push(element.value);
    });
    cipher = cipher.join("");
    clear = clear.join("");

    if (cipher === clear) {
        // alert("Hello you are a genuis");
        labelSentence.classList.remove("letter--normal");
        labelSentence.classList.add("letter--correct");
        // For the last version
        // inputLetter.forEach((element) => {
        //     element.classList.add("letter--correct");
        // });

        displaySentenceClear();
    }
    else {
        //alert("It's false");
        // inputLetter.forEach((element) => {
        //     element.classList.add("letter--false");
        //     labelSentence.classList.remove("letter--normal");
        //     labelSentence.classList.add("letter--false");
        // });
        console.log("Debug 1");
        checkLettre();
    }
}