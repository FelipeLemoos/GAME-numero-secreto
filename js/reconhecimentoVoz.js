const elementoResultado = document.querySelector(".resultado");
var tentativa = 0;
var maxtentativa = prompt("Digite a quantidade de tentativas:");

if (maxtentativa == "") {
  maxtentativa = 10;
}

console.log("Número máximo de tentativas: " + maxtentativa);

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

recognition.addEventListener("end", () => recognition.start());

function onSpeak(evento) {
  numeroVoz = evento.results[0][0].transcript;
  tentativa = tentativa + 1;
  exibeNumeroVoz(numeroVoz);
  valorValido(numeroVoz);
}

function exibeNumeroVoz(numeroVoz) {
  elementoResultado.innerHTML = `
        <p class="tentativa">Tentativa nº: ${tentativa}</p>
        <p>Você disse:</p>
        <p class="voz" id="voz">${numeroVoz}</p>`;
}
