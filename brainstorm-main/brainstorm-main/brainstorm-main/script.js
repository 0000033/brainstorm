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
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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

mostraPergunta();