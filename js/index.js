//Inserindo um Texto no Paragrafo 


/*
document.getElementById("texto").innerHTML = 
"Meu primeiro Texto <b>JS</b>!";


// Declaração de Variaveis VAR


var nome, sobrenome, nomeCompleto;

//Atribuiçoes de valores 
nome = "Matheus";
sobrenome = " De Jesus";
nomeCompleto = nome + sobrenome;

document.getElementById("texto").innerHTML = nomeCompleto 




//let

var x = 10; //aqui é 10

{
    var x=2; //aqui é 2
}
// aqui tambem vai ser 2
//document.getElementById("texto").innerHTML = x;



//Operadores

var valor1, valor2, valor3;
valor1 = 8;
valor2 = 2;

total =  (valor1 >= 8);   //true or false 
//alert(total);



var idade, eleitor;
idade=61;
eleitor= (idade<18) ? "Não, Eleitor":"Sim, Eleitor";


resultado = (idade > 60 && idade < 70); //true //false 

//alert(resultado);


//Funções

/* 

function soma(valor1, valor2){
    return valor1 + valor2;
}

function realParaDolar(real, cotacaoDolar){
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08;


var total = realParaDolar(valorReal, cotacao)

document.getElementById("texto").innerHTML = soma(10,100);

alert("O valor em real é R$: "+valorReal+" o valor em dólar U$ é: "+total);

*/


//OBJETOS

/*
const carro = {
    marca:"Fiat",
    modelo:"Uno",
    ano:2021,
    placa:"AQK-1998",
    buzina: function () { alert('sai da frenteeeeeeeeeeeee')},
    completo: function() {
        return "A marca é " + this.marca + " é o ano é: " + this.ano;
    }
};

console.log(carro.completo());
*/

//EVENTOS

//onclick

/*
function eventoClick(){
    document.body.style.backgroundColor = "blue";
}
// fim onclick

function eventoDblClick() {
    alert('Evento de clique Duplo!!')
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}
*/


//ARRAYS______________________________________________________________________________________________________________

//const lista = ["arroz", "feijão", "macarrão", "leite", "café"];
//lista[0] = "pão";

//console.log(lista);


const pessoa = ["Matheus", "Henrique", 30, "teste"]; //array

pessoa.push("Brasileiro");

console.log(pessoa);
//const eu = {nome:"Matheus", sobrenome:"Henrique", idade:30}; //Objeto

//eu.nome;
//pessoa[0];

