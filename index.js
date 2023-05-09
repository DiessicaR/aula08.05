/*//no nosso sistema, o usuário será solicitado para inserir vários números, um após o outro
//Quando ele digitar o número '0', devemos parar de solicitar novos inputs e imprimir no console a soma de todos os números por ele indicados
//Vamos supor que ele coloque: 10,3,50,7,0. 
//O resultado deve ser: 70


function somaNumeros() {
    let valor = 100; //é atribuido valor apenas para iniciar o laço 
    let soma = 0

    while(valor !== 0) {
        valor = Number(prompt('Digite um numero: \n'))
        soma += valor;
    }
    return soma;
}
console.log(somaNumeros());
*/

/*//Escreva uma função que receba um array com números e devolva qual o maior dentro dele 
//Ex: Para o array [11,15,18,14,12,13], a saída deve ser: 'O maior número é 18'

const nums = [7,13,9,5]

function maiorNumero (nums){
    let maior = 0;
     for(let i = 0; i < nums.length; i++){
      //  if (nums[2]){
         //   console.log(nums[2])
      //  }
        if(nums[i] > maior){
            maior = nums[i];
        }
     }
    return maior; 
}
console.log(nums)
console.log(maiorNumero(nums))
*/
//Considere que você tem um array com várias palavras. 
//Nossa tarefa é criar uma função para imprimi-las em uma só mensagem colocando um espaço entre elas. 
//Ex: Para este array ['Oi', 'sumido','tudo','bem'?,'Saudades'], dar a mensagem "Oi sumido tudo bem? Saudades"

/*const mensagem = ['Oi', 'sumido','tudo','bem?','Saudades']

function imprimeMensagem (mensagem){
    for (let mensagemOk of mensagem) {
        console.log(mensagemOk)
    }

}*/
/*

const palavras = ['Oi', 'sumido','tudo','bem?','Saudades'];

function construirFrase(palavras) {
    let frase = '';
    for (let palavra of palavras) {
        frase = frase +' '+ palavra;
    }
    return frase;
}
console.log(construirFrase(palavras).trim());
*/

let paisesAr = ['Brasil', 'Argentina', 'Russia', 'Lichtein'];
let contadorAr = 1;
for(let pais of paisesAr) {
    switch(pais) {
        case 'Brasil':
            console.log(contadorAr++ + '- ' + pais + '/BR');
            break;
         case 'Argentina':
            console.log(contadorAr++ + '- ' + pais + '/AR');
         break;
        case 'Russia':
            console.log(contadorAr++ + '- ' + pais + '/RU');
        break;
         case 'Lichtein':
            console.log(contadorAr++ + '- ' + pais + '/LI');
        break;
        default: 
        console.log( );
        break;
    }
}