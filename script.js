const luckMessage = [
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Acredite em você mesmo e tudo será possível.",
  "Cada novo dia é uma nova chance para mudar sua vida.",
  "O caminho para o sucesso é sempre uma jornada, nunca um destino.",
  "A persistência realiza o impossível.",
  "Não conte os dias, faça os dias contarem.",
  "Grandes coisas nunca vêm de zonas de conforto.",
  "A jornada de mil milhas começa com um único passo.",
  "A mente é tudo. Você se torna aquilo que você pensa.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "Acredite no seu potencial, mas nunca esqueça de trabalhar para alcançá-lo.",
  "O sucesso não é a chave para a felicidade. A felicidade é a chave para o sucesso.",
  "Cada obstáculo é uma oportunidade para melhorar.",
  "Nunca é tarde demais para ser o que você poderia ter sido",
];

let screenOne = document.querySelector(".screenOne");
let screenTwo = document.querySelector(".screenTwo");
let imgBiscoitOpen = document.querySelector("#openBiscoit");
let imgBiscoitBroken = document.querySelector("#brokenBiscoit");
let buttonBiscoit = document.querySelector("#returnBiscoit");
let luckyPhrase = document.querySelector("#luckyPhrase");

imgBiscoitOpen.addEventListener("click", clickBiscoit);
buttonBiscoit.addEventListener("click", returnToOpenBiscoit);

function clickBiscoit() {
  toggleScreen();
  changePhrase();
}

const toggleScreen = () => {
  screenOne.classList.toggle("hide");
  screenTwo.classList.toggle("hide");
};

function returnToOpenBiscoit() {
  toggleScreen();
}


function changePhrase() {
  let generatePostionPrahse = Math.round(Math.random() * 14);
  let showMessage = luckMessage[generatePostionPrahse];
  luckyPhrase.innerText = `${showMessage}`;
}

