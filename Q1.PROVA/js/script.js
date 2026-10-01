const inicio = document.querySelector('#inicio')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

bt1.addEventListener('click', esportivo)
bt2.addEventListener('click', SUV)
bt3.addEventListener('click', Hatch)
bt4.addEventListener('click', Picape)

function esportivo (){
    inicio.src = 'IMAGENS/images.jpg'
}
function SUV (){
    inicio.src = 'IMAGENS/SUV.jpg'
}
function Hatch (){
    inicio.src = 'IMAGENS/hatch.jpg'
}
function Picape (){
    inicio.src = 'IMAGENS/picape.jpg'
}