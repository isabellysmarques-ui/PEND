console.log("Olá, JavaScript!");

let a = 10;
let b = 3;

console.log("soma",a + b);
console.log("subtraçâo",a - b);
console.log("multiplicação",a * b);
console.log("divisão",a / b);
console.log("resto da divisão",a % b);
console.log("exponencial",a ** b);

let contador = 5;
contador++;
console.log(contador);


let c = 5
let d = 5
let e = 5
console.log("media",(c+d+e)/3);
console.log("resto de divisao",c % e); 

let x = 10;
let y = "10";

console.log("igualdade",x == y);
console.log("identico",x === y);
console.log("desigualdade",x != y);
console.log("desigualdade estrita",x !== y);


let idade=19;

if(idade>=18){
    console.log("voce e maior de idade!");
}else{
    console.log("voce nao e maior de idade!");
}


let n1 = 1;
let n2 = 10;

if(n1>n2){
    console.log("n1 é maior!");
}else if(n2>n1){
    console.log("n2 é maior!")
}else{
    console.log("n1 e n2 iguai!");
}


console.log("operadores logicos")

let years = 20;
let temCarteira = true;
console.log(years >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;
console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado);//true


media = 9;
frequencia = 77;
if(media>=7 && frequencia>=75){
    console.log("voce passou!");
}else{
    console.log("voce nao passou!");
}


let login = true;
let token = false;
console.log(login||token);