const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botao')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')

botao.addEventListener('click',imc)

function imc(){
    d = Number (distancia.value)
    c = Number (consumo.value)
    p = Number (preco.value)
    calculo = (d/c)*p

    resultado1.textContent= `O seu gasto vai ser de $ ${calculo.toFixed(2)}`

}