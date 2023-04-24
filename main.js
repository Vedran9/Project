const textDiv = document.querySelector("#main_text");
const speedE1 = document.querySelector("#speed");

const text = "Vedran Metlar frontend web developer!";
let i = 1;
let speed = 1000;

const writeText = function() {
   textDiv.innerHTML = text.slice(0, i); //0 oznacava prvo slovo
   i++; // i = karakteri, izbacuje svaki naredni karakter

   if(i > text.length) { //ako je i vece od text.length tada i vrati da bude 1
    i = 1;
   }
   
  // console.log(speed);
   setTimeout(writeText, speed);
};

writeText();
speedE1.addEventListener('input', (e) => {
    speed = 1000 / e.target.value;
});