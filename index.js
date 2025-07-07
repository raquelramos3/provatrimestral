let totaltimes = 0;
let maxtimes = 4;
let mostraHTML = document.getElementById("mostraHTML");


function cadastrartime() {

      if (totaltimes > maxtimes) {
        alert("Limite de 4 times atingido!");
        return;
      }
 
      let nometime = prompt("Digite o nome do time:");

      let nome1 = prompt("Digite o nome do primeiro jogador:");
      let idade1 = parseInt(prompt("Digite a idade do primeiro jogador:"));
    
      let nome2 = prompt("Digite o nome do segundo jogador:");
      let idade2 = parseInt(prompt("Digite a idade do segundo jogador:"));

      let nome3 = prompt("Digite o nome do terceiro jogador:");
      let idade3 = parseInt(prompt("Digite a idade do terceiro jogador:"));

      let media = parseInt(idade1 + idade2 + idade3) / 3;

      if (media > 15) {
        alert("Média de idade acima de 15! Cadastre um novo time. ")
        return;
      }

      let lista = document.getElementById("listatimes");
      let bloco = document.createElement("div")

       mostraHTML.innerHTML += `<p><b>${nometime.toUpperCase()}</b>, Média de Idade: ${media}</p>`;
       mostraHTML.innerHTML += `<p>${nome1}, ${idade1}</p>`;
       mostraHTML.innerHTML += `<p>${nome2}, ${idade2}</p>`;
       mostraHTML.innerHTML += `<p>${nome3}, ${idade3}</p>`;

}

