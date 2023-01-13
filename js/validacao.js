function valorValido(numeroVoz) {
  const numero = +numeroVoz;

  if (numeroVoz == "game over" || tentativa > maxtentativa) {
    document.body.innerHTML = `
        <h1>GAME OVER!!!</h1>
        <button class="gameover" id="restart">Jogar Novamente</button>`;
    document.body.style.backgroundColor = "black";
    document.body.style.color = "red";
  } else if (Number.isNaN(numero)) {
    elementoResultado.innerHTML += `
        <p class="dicainvalida">O valor "${numeroVoz}" é inválido!</p>
        <br>
        <p class="dicainvalida"> Informe um valor entre ${menorvalor} e ${maiorvalor}</p>`;
  } else if (numero < menorvalor || numero > maiorvalor) {
    elementoResultado.innerHTML += `
        <p class="dicainvalida">O valor "${numeroVoz}" é inválido!</p>
        <br>
        <p class="dicainvalida"> Informe um valor entre ${menorvalor} e ${maiorvalor}</p>`;
  } else if (numero > numeroAleatorio) {
    elementoResultado.innerHTML += `
        <p id="dica">O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></p>`;
  } else if (numero < numeroAleatorio) {
    elementoResultado.innerHTML += `
        <p id="dica">O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></p>`;
  } else if (numero == numeroAleatorio) {
    document.body.innerHTML = `
        <h1>Você Venceu!!!</h1>
        <h2>O número secreto era <span>${numeroAleatorio}</span></h2>
        <h3>Você acertou com <span>${tentativa}</span> tentativa(as)</h3>
        <button class="restart" id="restart">Jogar Novamente</button>`;
  } else if ((numeroVoz = "game over")) {
    document.body.innerHTML = `
        <h1>GAME OVER!!!</h1>
        <button class="restart" id="restart">Jogar Novamente</button>`;
  }
}

document.body.addEventListener("click", (evento) => {
  if (evento.target.id == "restart") {
    tentativa = 0;
    window.location.reload();
  }
});
