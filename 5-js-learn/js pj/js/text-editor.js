// Selector

const obj = document.querySelector("#obj");
const text = document.querySelector("#text");
const selectFont = document.querySelector("#selectFont");
const color = document.querySelector("#color");
const fontSize = document.querySelector("#fontSize");
const talkBtn = document.querySelector("#talkBtn");
const typeBtn = document.querySelector("#typeBtn");

const fonts = ["Ox Nard Regular","Green Medium","RainDanceSSK Regular","ScanLine Regular"]

// function
const changeText = (event) => {
    obj.innerText = event.target.value;
}

const changeColor = (event) => {
    obj.style.color = event.target.value;
}

// px pg pay ya tl 
const changeFontSize = (event) => {
    obj.style.fontSize = event.target.value + "px";
}


// select option ko dr myo yay ll ya ................
// const createNewOption = (text,value) => {
//     const option = document.createElement("option");
//     option.value = value;
//     option.text = text;
//     return option;
// }
// console.log(createNewOption("myanmar","mm"));
// option yay nee par pee tr ..........................
// console.log(new Option("myanmar","mm"));

const changeFontFamily = (event) => {
    obj.style.fontFamily = event.target.value;
}

const talk = (text) => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    console.log(voices);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[0];
    utterance.rate = 0.8;
    synth.speak(utterance);

    utterance.addEventListener("start",(arg) => {
        talkBtn.classList.add("active");
    });
    utterance.addEventListener("end",(arg) => {
        talkBtn.classList.remove("active");
    })
};

const type = () => {
    var recognition = new webkitSpeechRecognition();

    recognition.onstart = function () {
        console.log("speech recognition has started.");
    };

    recognition.onresult = function(event){
        var transcript = event.results[0][0].transcript;
        text.value += transcript;
    };

    recognition.addEventListener("start",(arg) => {
        typeBtn.classList.add("active")
    });
    recognition.addEventListener("end",(arg) => {
        typeBtn.classList.remove("active")
    });

    recognition.start();
}

// change range html fontSize
fontSize.min = parseFloat(window.getComputedStyle(obj).fontSize);
fontSize.max = 100;
// fontsize 16 ko range a lal ka pya nay lox range asa ka pya tr lo chin yin
fontSize.value = fontSize.min; 

// create option for fonts 
fonts.forEach((font) => selectFont.append(new Option(font,font)));

// event
text.addEventListener("keyup",changeText);
color.addEventListener("change",changeColor);
fontSize.addEventListener("change",changeFontSize);
selectFont.addEventListener("change",changeFontFamily);

talkBtn.addEventListener("click",() => {
    talk(text.value);
});

typeBtn.addEventListener("click",() => {
    type();
})

