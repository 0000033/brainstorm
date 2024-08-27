const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Matheus é gay?",
        alternativas: [
            {
            
                texto: "sim, ele é",
                afirmacao: "afirmacao"
            },
            {
                texto: "não, ele é",
                afrimacao: "afirmacao"
            }
            

        ]
    },
    {
        enunciado: "o Gabriel é manco?",
        alternativas: [
            {
                texto:"não de pouco",
                afirmacao: "afirmacao"
            }
            
            
        ]
    },
    {
        enunciado: "Palmeiras tem mundial?",
        alternativas: [
            {
                texto:"com certeza",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
    {
        enunciado: "vai chover hoje?",
        alternativas: [
            {
                texto:"Já está chovendo" ,
                afrimacao:"afirmacao"
            }
            
            
            
        ]
    },
    {
        enunciado: "o Fernando é estranho?",
        alternativas: [
            {
                texto:"Sim",
                afirmacao:"afirmacao"
            }
            
            
            
        ]
    }
]; 

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraPergunta(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "em 2049"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
