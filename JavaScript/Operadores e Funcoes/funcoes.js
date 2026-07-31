function saudacao(){
    console.log("Olá, JavaScript!");
}
saudacao();

function nome(nome){
    console.log("Olá," + nome);
}
nome("Ana");


function somar (a,b){
    return a+b;
}
console.log(somar(5,3));


let peso = prompt("Digite o seu peso: ");
let alt = prompt("Digite sua altura:");
function imc(peso,alt){
    return peso/(alt*alt);
}
console.log("Seu IMC é:" + imc(peso,alt));



let numero = prompt("Digite o seu numero:");
function imparOuPar(numero){
    if(numero % 2 === 0){
        return"par";
    }else{ 
        return"impar";
    }
}
console.log("O numero é", imparOuPar(numero));
