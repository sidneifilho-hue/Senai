function calcularC(A, B) {
    let C;

    if (A === B) {
        C = A + B;
    } else {
        C = A * B;
    }

    return C;
}

let resultado = calcularC(3, 3);

console.log("Resultado de C =", resultado);