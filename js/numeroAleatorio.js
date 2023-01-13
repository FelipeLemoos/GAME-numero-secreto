const menorvalor = document.querySelector("#menor-valor").innerHTML;

var maiorvalor = prompt("Digite o maior valor:");

if (maiorvalor == "") {
  document.querySelector("#maior-valor").innerHTML = 1000;
  maiorvalor = 1000;
} else {
  document.querySelector("#maior-valor").innerHTML = maiorvalor;
}

const numeroAleatorio = geraNumeroAleratorio();
console.log("Número aleatório: " + numeroAleatorio);

function geraNumeroAleratorio() {
  return parseInt(Math.random() * maiorvalor + 1);
}
