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


//const lista1 = ["Pão", "sabão", "vassoura"]; //array
//const lista2 = ["Arroz", "Trigo", "café", "Pipoca"];

//const superLista = lista1.concat(lista2);


//const eu = {nome:"Matheus", sobrenome:"Henrique", idade:30}; //Objeto

//eu.nome;
//pessoa[0];

//metodos arrays ----------------------------------------------------------------------------------------------------------

/*
const numeros = [1, 89, 45, 23, 333];
const maior20 = numeros.filter(filtragem);


document.getElementById("teste").innerHTML = maior20;


function filtragem(value, index, array) {
    return value > 20;
}

*/


// Condicionais If=se e Else=senão ----------------------------------------------------------------------------------------------------------


/*
var interruptor = "";

if(interruptor=="on"){
    alert ("A lampada está ligada!!"); 
}
else {
    alert ("A lampada está desligada!!");
}

*/

//-----------------------------------------------------------------------------------------------------------------

/*
var hora = new Date().getHours();
if (hora < 12) {
    alert('Bom dia!');
}
else if (hora < 18) {
    alert('Boa Tarde!');
}
else {
    alert('Boa noite!');
}
*/


/*
function verificar() {
    let nome = document.getElementById("nome").value;

    if (nome == "" || nome ==null){
        let p = document.getElementById("teste");
        p.innerHTML = "O campo Não pode ser vazio!!";
        p.style.color = "red";
    }
    else {
        let p = document.getElementById("teste");
        p.innerHTML = "Parabéns, Tudo OK!!";
        p.style.color = "green";
    }
}

*/


//switch---------------------------------------------------------------------------------------------------
/*
function verificaCor() {
    let cor = document.getElementById("cor").value;

    switch (cor) {
        case "azul":
            //O que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            //o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            //o que acontece
            document.body.style.backgroundColor = "green";
            break;
        default:
            //o que acontece
            document.getElementById("teste").innerHTML = "Nenhuma cor disponivel para: " +cor;
    }
}

*/

//Laço de Repetição---------------------------------------------------------------------------------

/*
for (let i = 0; i < 10001; i++){
    document.getElementById("teste").innerHTML += i + ", ";
}
*/


//Exercicio 2
/*
var ano = new Date().getFullYear();

for(let i = ano; i >= 1900; i--){
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
}

*/

/*
const carros = ["focus","Punto", "Chevete", "Brasília"];

var tamanho = carros.length;

for(let i = 0; i < tamanho; i ++ ){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}
*/

//Eventos de tempo com javascript ------------------------------------------------------------------------------

//setTimeout
/*
function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a Contar!";
    setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
}, 10000);
}

function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a Contagem";
}
*/

//setInterval

/*function ativarContagem() {
    setInterval(function() {
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) - 1;
    },1000)
}

function pararContagem() {

}
*/

//Classes -----------------------------------------------------------------------------------------------------------

/*

class Carro {
    constructor(valor1,valor2,valor3) {
    this.marca = valor1;
    this.modelo = valor2;
    this.ano = valor3;
    }
    buzina(){
        return this.modelo + " buzinou: Buzinando";
    }
}




const focus = new Carro("Ford", "focus", 2010);
const x6 = new Carro("BMW", "x6", 2022)
console.log(x6.buzina());
*/

//Manipulação de Datas -----------------------------------------------------------------------------------------------

//Comando básico para pegar data
let data = new Date();
//console.log(data);


//Pegar ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);


//Pegar o mÊs atual - de 0 até 11 sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();
//console.log(mes);

// Mostrar o mês no Formato escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno[data.getMonth()];



//Pegar dia do mes - 1 até 31
let diaMes = data.getDate();



//Pegar o dia da semana - 0 a 6
let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaEscrito = diasDaSemana[data.getDay()];
console.log(diaEscrito);


//Pegar a hora - de 0 até 23
let hora = data.getHours();
console.log(hora);

//Pegar Minutos - de 0 até 59
let minutos = data.getMinutes();
console.log(minutos);

//Pegar segundos - de 0 até 59
let segundos = data.getSeconds();
console.log(segundos);

//Pegar os Milisegundos de 0 até 999
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);


//Pegar a data no padrão brasileiro - DIA/MES/ANO
let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR);

//Pegar os valores separados
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
    return x < 10 ? '0' + x : '' + x;
}

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR);

//Comparar datas - Maior ou Menor. Ex: Vencimentos
var hoje = new Date();
var vencimento = new Date(2022, 10, 4);

if (hoje > vencimento) {
    console.log("Sua conta esstá Vencida!");
}
else {
    console.log("Sua conta ainda não venceu, Tudo Certo!")
}

//Diferença em dias entre duas datas
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");


//JSON--------------------------------------------------------------------------------------------------------------

/*
const carro = {
    marca: "Ford",
    modelo: "Focus",
    motor: ["1.6", "1.0", "2.0"]
}

//CONVERTEU PARA TEXTO JSON
let texto = JSON.stringify(carro);

//Colocou texto no nosso HTML
document.getElementById('area').innerHTML = texto;

//CONVERTEMOS TEXTO EM OBJETO
let obj = JSON.parse(texto);

//PEGAMOS O VALOR DESTE OBJETO
console.log(obj.motor[0]);
*/

function buscarCEP() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();
    
    ajax.onload = function() {
        //document.getElementById('texto').innerHTML = this.responseText;

        //TRANSFORMEI O TEXTO EM OBJETO
        let obj = JSON.parse(this.responseText);

        //AQUI PEGUEI OS VALORES QUE EU PRECISAVA EXIBIR MAIS ORGANIZADO
    let logradouro = obj.logradouro;
    let cidade = obj.localidade;
    let estado = obj.uf;
    document.getElementById('texto').innerHTML = "Logradouro: " + logradouro + "<br> Cidade: " + cidade + "<br> Estado: " + estado;  
    }

}






//sadasd