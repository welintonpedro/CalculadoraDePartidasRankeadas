///////// FUNÇÃO PARA CALCULAR O RANKING //////////
function calcularRanked(winPlayer, lossPlayer) {
    return winPlayer - lossPlayer;
}
///////// FUNÇÃO PARA DEFINIR O TIER DO RANKING //////////
function definirLevelRanked(balanceRanked) {
    if (balanceRanked <= 10) {
        levelRank = "Ferro";
    }
    else if (balanceRanked >= 11) {
        levelRank = "Bronze";
    }
    else if (balanceRanked >= 21) {  
        levelRank = "Prata";
    }
    else if (balanceRanked >= 51) {
        levelRank = "Ouro";
    }
    else if (balanceRanked >= 81) {
        levelRank = "Diamante";
    }
    else if (balanceRanked >= 91) {
        levelRank = "Lendário";
    }
    else if (balanceRanked >= 101) {
        levelRank = "Imortal";
    }
    return levelRank;
}
///////// DADOS DO JOGADOR DE VITORIAS E DERROTAS //////////

let winPlayer = 29  //Número de vitórias
let lossPlayer = 10 //Número de derrotas

///////// CÁLCULO E MOSTRAR O RANKING //////////
 
let balanceRanked = calcularRanked(winPlayer, lossPlayer); // Criei uma VARIAVEL chamada balanceRanked para chamar a função 'CalcullarRanked' a Função retornar o Saldo de vitorias
console.log("Seu Herói tem saldo de vitórias de : " + balanceRanked + ", e você está no RANK: " + definirLevelRanked(balanceRanked)); //Chamei a função com a variavel balanceRanked e imprimi o resultado no console e concatenei com uma função chamando outra função.
