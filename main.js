const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu() {
  console.log("\n=================================");
  console.log("-------- SISTEMA DE GAMERS --------");
  console.log("\n1 - Cadastrar");
  console.log("\n2 - Deletar");
  console.log("\n3 - Mostrar Equipe");
  console.log("\n4 - Cálculo da Média da Equipe");
  console.log("\n5 - Atualizar Pontos");
  console.log("\n6 - Buscar Jogador");
  console.log("\n7 - Sair");
}

function cadastrarJogador() {
  let nomeJogador = prompt("Digite o nome do jogador: ");
  let funcaoJogador = prompt("Digite a função do jogador: ");
  let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

  if (isNaN(pontuacaoJogador)) {
    console.log("Pontuação inválida!");
    return;
  } else {
    let recruta = {
      nome: nomeJogador,
      funcao: funcaoJogador,
      pontuacao: pontuacaoJogador,
    };
    time.push(recruta);
    console.log("Jogador " + nomeJogador + " foi cadastrado com sucesso!");
    console.log("----------------------------------");
  }
}

function deletarJogador() {
  if (time.length == 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }
  let nomeDeleteado = prompt("Digite o nome a ser deletado: ");
  let indexDeletado = -1;

  for (let i = 0; i < time.length; i++) {
    if (time[i].nome === nomeDeleteado) {
      indexDeletado = i;
      break;
    }
  }

  if (indexDeletado === -1) {
    console.log("Jogador não encontrado");
    return;
  }

  time.splice(indexDeletado, 1);
  console.log("Jogador deletado com sucesso!");
}

function mostrarEquipe() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  for (let i = 0; i < time.length; i++) {
    let jogador = time[i];
    console.log(
      i +
        1 +
        ". " +
        jogador.nome +
        " | Função: " +
        jogador.funcao +
        " | Pontuação: " +
        jogador.pontuacao,
    );
  }
}

function calculoDaMedia() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado.");
    return;
  }

  let totalPontos = 0;

  for (let i = 0; i < time.length; i++) {
    totalPontos = totalPontos + time[i].pontuacao;
  }
  let mediaPontos = totalPontos / time.length;

  console.log("O time possui uma pontuação média de: ", mediaPontos);
}

function buscarJogador(nomeDesejado) {
  console.log("Buscando por: " + nomeDesejado + "...");
  let encontrou = false;

  for (let i = 0; i < time.length; i++) {
    let jogadorAtual = time[i];

    if (jogadorAtual.nome === nomeDesejado) {
      console.log("JOGADOR ENCONTRADO!");
      console.log(
        "Nome: " + jogadorAtual.nome + " | Pontos: " + jogadorAtual.pontuacao,
      );
      encontrou = true;
      break;
    }
  }

  if (encontrou === false) {
    console.log(
      "O jogador " + nomeDesejado + " não faz parte da nossa equipe.",
    );
  }
}

function atualizarPontuacao() {
  console.log("--- ATUALIZAÇÃO DE RANKING ---");
  let nomeDesejado = prompt("Qual jogador deseja atualizar? ");

  for (let i = 0; i < time.length; i++) {
    let jogadorAtual = time[i];

    if (jogadorAtual.nome === nomeDesejado) {
      let pontosNovos = Number(prompt("Quantos pontos ele ganhou hoje? "));

      if (isNaN(pontosNovos)) {
        console.log("Pontuação inválida!");
        return;
      }

      jogadorAtual.pontuacao += pontosNovos;
      console.log(
        "SUCESSO! A pontuação de " +
          jogadorAtual.nome +
          " subiu para " +
          jogadorAtual.pontuacao +
          " pontos!",
      );
      return;
    }
  }

  console.log(
    "ERRO: O jogador " + nomeDesejado + " não faz parte da nossa equipe.",
  );
}

while (continuar === true) {
  mostrarMenu();
  let opcao = prompt("Escolha uma opção do menu: ");

  switch (opcao) {
    case "1":
      cadastrarJogador();
      break;
    case "2":
      deletarJogador();
      break;
    case "3":
      mostrarEquipe();
      break;
    case "4":
      calculoDaMedia();
      break;
    case "5":
      atualizarPontuacao();
      break;
    case "6":
      buscarJogador(prompt("Digite o nome do jogador: "));
      break;
    case "7":
      continuar = false;
      console.log("Até a próxima!");
      break;
    default:
      console.log("Opção inválida!");
  }
}
