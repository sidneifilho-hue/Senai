const lampada = document.querySelector('#lampada')
const btligar = document.querySelector('#btligar')
const btdesligar = document.querySelector('#btdesligar')

//eventos

btligar.addEventListener('click', ligar)
btdesligar.addEventListener('click', desligar)

//ação

function ligar (){
    lampada.src = 'imagem/ligada.png'
}

function desligar (){
    lampada.src = 'imagem/desligada.png'
}
