/*

const lista = [
    "arroz",
    "feijão",
    "tutu",
    30,
    true,
    false,
    null,
    "gar"
];

const lista2 = [
    "brabi",
    "lety",
    "dudu",
    32,
    false,
    false,
    undefined,
    "gary"
];

const lista3 = [
    "brab",
    "let",
    "dud",
    3,
    undefined,
    "ary"
];

const jogadores = [
    "biro biro",
    "pele",
    "ronaldo",
    "jesus",
    "rafael"
];
const numeros = [
    1,
    2,
    6,
    8,
    9,
    100,
    55,
    25,
    69,
    87
];



lista[2] = "jesus"
lista.pop(); // remove o último indice da array
lista.push("qualquer coisa"); // adiciona um item no último indice
lista.shift(2); // remove o indice que vc indicar
lista.unshift("Lindao"); //adiciona o iten na primera posição
lista.splice(5, 0, "nayara", "bombado", "itens");
//const nome = {nome:"jesus", sobrenome:"vicken", idade:30};

//console.log(nome.idade)

//alert(lista[2]);
//console.log(lista);
console.log(lista[lista.length - 1]); //ultimo item dentro da minha lista
document.getElementById("texto").innerHTML = lista.join(". ");

//divindo uma matriz
//const superCraq = jogadores.slice(1,3);
const ordem = jogadores.sort();

//const numerica = numeros.sort(function(a,b){ return b - a});


//concatenando matrizes 

const superLista = lista.concat(lista2, lista3);

const maior20 = numeros.filter(filtragem);

document.getElementById("texto").innerHTML = superLista;
document.getElementById("seed").innerHTML = maiorNumero(numeros);
document.getElementById("class1").innerHTML = menorNumero(numeros);
document.getElementById("class2").innerHTML = maior20;




function maiorNumero(array) {
    return Math.max.apply(null, array);
};

function menorNumero(array) {
    return Math.min.apply(null, array);
};

function filtragem(value, index, array) {
    return value > 20
};


//IF e ELSE e ELSEIF

var lampada = "on";

if (lampada == "on") {
    alert('lampada ligadaaaaaaa');
} else {
    alert('lampada desligada');
}

var hora = new Date().getHours();

if (hora < 12) {
    alert("bom dia");
} else if (hora < 18) {
    alert("boa tarde");
} else {
    alert("boa noite");
}


function verificar() {
    let nome = document.getElementById("nome").value; 

    if (nome == "" || nome == null) {
        document.getElementById("campo").innerHTML = "o campo nao pode ser vazio";
        
    }else {
        document.getElementById("campo2").innerHTML = "parabens tudo certinho"
    }
};

function verificar() {
    let nome = document.getElementById("nome").value;
    if (nome == "" || nome == null) {
        let p = document.getElementById("campo");
        p.innerHTML = "o campo NÃO pode estar vazio";
        p.style.color = "red";
    } else {
        let p = document.getElementById("campo");
        p.innerHTML = "Parabéns td certinho!";
        p.style.color = "green";

    }
};

//switch 

function verificaCor() {
    let cor = document.getElementById("campo").value;


    switch (cor) {
        case "verde":
            //o que vai acontecer 
            document.body.style.backgroundColor = "green";
            break;

        case "azul":
            document.body.style.backgroundColor = "blue";
            break;

        case "rosa":
            document.body.style.backgroundColor = "pink";
            break;

        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;

        default:
            document.getElementById("texto").innerHTML = "O valor nao existe para " + cor;


    };
};



function verificaDia() {

    let dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
        case 0:
            document.getElementById("texto").innerHTML = "Hoje é domingo!";
            break;

        case 1:
            document.getElementById("texto").innerHTML = "Hoje é segunda!";
            break;

        case 2:
            document.getElementById("texto").innerHTML = "Hoje é terça!";
            break;

        case 3:
            document.getElementById("texto").innerHTML = "Hoje é Quarta!";
            break;
        case 4:
            document.getElementById("texto").innerHTML = "Hoje é quinta!";
            break;
        case 5:
            document.getElementById("texto").innerHTML = "Hoje é sexta";
            break;
        case 6:
            document.getElementById("texto").innerHTML = "Hoje é sábado!"
            break;
        case 7:
            document.getElementById("texto").innerHTML = "Hoje é Domingo";
            break;

        default:
            document.getElementById("textoo").innerHTML = " O dia não está aqui";

    };


};



for (let i = 0; i < 10001; i++) {
    document.getElementById("teste").innerHTML += i + ", ";
};




let ano = new Date().getFullYear();

for (let i = ano; i > 1900; i--) {
    document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";

};


const carros = ["chevet", "gol", "fusca", "pegeout", "delrey", "golf", "palio"];
var tamanho = carros.length;

for (i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros[i] + " -  ";
};



function ativarContagem() {
    document.getElementById("tempo").innerHTML = "Começou a contar";

    //ativa a função apenas uma vez quando o tempo for especificado 
    setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o site time out";

    },5000)
    
};

function pararContagem() {
    document.getElementById("tempo").innerHTML = "Começou a contar";
    setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o site time out";

    },5000)
    
};


function ativarContagem() {
    document.getElementById("tempo").innerHTML = "Começou a contar";
        //Executa apenas uma vez após o tempo determinado
    tempo = setTimeout(function(){
        document.getElementById("tempo").innerHTML = "Executou o settimeout";

    },5000);
    
};


function pararContagem() {
    //clearTimeout(tempo);
    //document.getElementById("tempo").innerHTML = "Parou a Contagem";

};


function ativarContagem() {
    tempo = setInterval(function(){
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;
        document.getElementById("tempo").innerHTML= soma;

    },1000);
    
};

function pararContagem() {
    clearInterval(tempo);
    document.getElementById("tempo")
}




function ativarContagem() {
    tempo = setInterval(function () {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma === 0) {
            document.getElementById("tempo").innerHTML = "tempo esgotado";
            pararContagem()
        } else {
            document.getElementById("tempo").innerHTML = soma;
        };

    }, 1000);

};

function pararContagem() {
    clearInterval(tempo);
    document.getElementById("tempo")
};



//Classes - São como fábricas para criar objetos, são funções especiais para construir objeto 

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    };
    buzina() {
        return this.modelo + " beeeeeeeeeeeeeeeeeeeee";
    };

    farol() {
        document.getElementById("tempo").innerHTML = "tempo esgotado";
    };
    aceleta() {
        document.body.style.backgroundColor = "blue";
    };
};

const uno = new Carro("Fiat", "uno", 2016);
const gol = new Carro("Woslks", "Gol", 2019);
const polo = new Carro("Wolks", "Polo", 2023);
const argo = new Carro("BMW", "argo", 2018);

console.log(uno);
console.log(gol.ano);
console.log(polo);
console.log(argo.farol());




//Manipular datas em JS Vanila Usamos um objeto especial chamado Date 

// comando base para pegar a Data a variável Data vc vai usar para manipular as datas
let data = new Date();
console.log(data);

//comando para pegar o ano com 4 digitos
let ano = data.getFullYear();
console.log(ano);

//comando para pegar o Mês atual de 0 a 11. Sendo 0 janeiro e 11 dezembro
let mes = data.getMonth();

//Mostrar o mês no formato escrito

const mesDoAno = ["janeiro","fevereiro", "março", "maio", "abril", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
let mesNomeCerto = mesDoAno[data.getMonth()];
//console.log(mesNomeCerto);


//pegar dia do Mês

let diaMes = data.getDate();
//console.log(diaMes);


//Pegar o dia da Semana

let diaSemana = data.getDay();
//console.log(diaSemana);

const semanaCompleta = ["Domingo", "Segunda", "Terça","Quarta", "Quinta", "Sexta", "Sábado"];
let diaNomeCerto = semanaCompleta[data.getDay()];
console.log(diaNomeCerto);

//pegar horas
let hora = data.getHours();
console.log(hora);

//pegar minutos

let minutos = data.getMinutes();
console.log(minutos);

let segundos = data.getSeconds();
console.log(segundos);

let mili = data.getMilliseconds();
console.log(mili);


//pegar data padrão BR

let dataBR = data.toLocaleDateString('pt-BR');
console.log(dataBR);


d = new Date();
const diaMes = d.getDay();
const mes = d.getMonth() + 1; // +1 para o zero ser substituido
const ano = d.getFullYear();


function addZero(x) { return x < 10 ? '0' + x : ' ' + x };

let DataPadrao = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(DataPadrao);

//comparar datas 

var hoje = new Date();
var vencimento = new Date(2020, 0, 10);

if (hoje > vencimento) {
    console.log("sua conta está vencida !");

} else {
    console.log("Sua conta ainda não venceu!")
};



//diferença entre duas datas em dias 

// > quanto tempo falta para o final do ano <

var dataInicial = new Date(); //pegando a hora no metodo Date
var dataFinal = new Date(2023, 11, 31); // setando a data final dentro do método


//dias em milisegundos calculo 
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

// conversao de dias em milisegundos para dias normais 
var difDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(difDias + " dias");


//JSON  <<<<


const carro = {
    marca: "fiat",
    modelo:"Bravo",
    ano:2016,
    cor:"branco"
};


//convertendo objeto em texto
let texto = JSON.stringify(carro);


document.getElementById('tempo').innerHTML = texto;

//convertendo texto em objeto 
let convert = JSON.parse(texto);

console.log(convert.marca);


const homem = {
    nome:"jesus",
    idade:32,
    sobrenome:"vicken",
    genero:"masculino",
    client: ["Rhayssa","Rhayra","Vitória"]
};

let con = JSON.stringify(homem); 

document.getElementById("tempo2").innerHTML = con;

let vert = JSON.parse(con);
console.log(vert.client[2]);



//fazendo requisição usando ajax

const ajax = new XMLHttpRequest();

ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function () {
    document.getElementById('tempo2').innerHTML = this.responseText;
    let obj = JSON.parse(this.responseText);

    alert(obj.ddd);

};
*/ 

//fazendo requisição usando ajax (2)


function buscarCEP (){

    //pegando os valores do input
    let input = document.getElementById('CEP').value;

    //utilizando o AJAX para fazer a requisção já incluindo o valor do input no link
    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+ input +'/json/');
    ajax.send();

    // quando carregar o ele executa essa função
    ajax.onload = function () {
        //document.getElementById('tempo2').innerHTML = this.responseText;
        //transformei o texto em objetos para trabalhar com apenas algumas informações
        let obj = JSON.parse(this.responseText);

        //aqui peguei os valores que eu queria trabalhar
        let logradouro = obj.logradouro;
        let bairro = obj.bairro;
        let uf = obj.uf;
        let ddd = obj.ddd;
        //imprimindo na tela apenas os valores que coletei do JSON 
        document.getElementById('tempo2').innerHTML= "Logradouro:" + logradouro + "<br> Bairro:" + bairro + "<br> UF:" + uf + "<br> DDD:" + ddd;
    }; 

};


















