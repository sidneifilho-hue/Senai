
function verificar(numero){
    if (numero > 0)
        resposta = 'Positivo'
    else if (numero < 0)
        resposta = 'Negativo'
    else
        resposta = 'Neutro'
    return resposta
}

resultado = verificar(10)
console.log(`Resultado: ${resultado}`)