const pergunta = document.getElementById('pergunta')
const numero = document.getElementById('numero')
const botao1 = document.getElementById('btn1')
const botao2 = document.getElementById('btn2')
const botao3 = document.getElementById('btn3')
const botao4 = document.getElementById('btn4')
let numeroQuestao = 0
const listaBTN1 = ['', 'Rogério Ceni', '5', 'USSR', 'Cumpade Washington', 'Collor', '', '1', 'Burundi', 'Fábio', 'Não']
const listaBTN2 = ['', 'Gustavo Lima', '4', 'Império Macedônico', 'Bolsonaro', 'FHC', '', '2', 'Zaire', 'Cachorrão', 'Negativo']
const listaBTN3 = ['', 'Flavio', '3', 'Império Romano', 'Getúio Vargas', 'Whindersson Nunes', '', '3', 'Gabão', 'Gordon Ramsay', 'Incorreto']
const listaBTN4 = ['', 'Jefferson', '109238', 'Império do Brasil', 'José Sarney', 'John Pedro II', '', '4', 'Papua Nova Guiné', 'Jacquin', 'Muito']
const listaResp = ['', 'nome', 'btn2', 'btn3', 'btn4', 'btn1', 'btn3', 'numero', 'btn2', 'btn1', 'btn4' ]
const listaPerg = ['', 'Qual é o nome do criador do jogo?', 'Quanto é 2+2', 'Qual desses durou mais', 'Qual o nome do primeiro presidente da nova república?', 'E qual foi o segundo?', 'Vai na fé :)', 'De quanto o Brasil perder pra Alemanha em 2014?', 'Qual desses não existe mais?', 'Vergonha da Profission:', 'Gostou do jogo?'  ]

function clicar(btnID) {
    if (btnID === listaResp[numeroQuestao]) {
        proximaPergunta()
    } else reiniciar()
}

function proximaPergunta() {
    numeroQuestao ++
    if (numeroQuestao > 10) {
        location.href = "fimDeJogo.html"
    } else {
        pergunta.innerHTML = listaPerg[numeroQuestao]
        numero.innerHTML = numeroQuestao
        botao1.innerHTML = listaBTN1[numeroQuestao]
        botao2.innerHTML = listaBTN2[numeroQuestao]
        botao3.innerHTML = listaBTN3[numeroQuestao]
        botao4.innerHTML = listaBTN4[numeroQuestao]
    }
}

function reiniciar() {
    window.location.reload()
}