const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Matheus é gay?",
        alternativas: [
            "sim, ele é",
            "não, ele é"
        ]
    },
    {
        enunciado: "o Gabriel é manco?",
        alternativas: [
            "não de pouco",
            "a primeira alternativa"
        ]
    },
    {
        enunciado: "Plameiras tem mundial?",
        alternativas: [
            "com certeza",
            "obviamnete"
        ]
    },
    {
        enunciado: "vai chover hoje?",
        alternativas: [
            "Já está chovendo" ,
            "Segundo minhas pesquisas, sim"
        ]
    },
    {
        enunciado: "o elto é pau mandado da Maria?",
        alternativas: [
            "Sim",
            "sim,bem cachorrinho"
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraPergunta(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();