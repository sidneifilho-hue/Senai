const primeiro = document.querySelector('#primeiro');
const segundo = document.querySelector('#segundo');
const terceiro = document.querySelector('#terceiro');

const botao = document.querySelector('#botao');

const resultado1 = document.querySelector('#resultado1');
const resultado2 = document.querySelector('#resultado2');

botao.addEventListener('click', media);

function media() {

    const p = Number(primeiro.value);
    const s = Number(segundo.value);
    const t = Number(terceiro.value);

    const media = (p + s + t) / 3;

    resultado1.textContent = `A sua média é ${media.toFixed(2)}`;

    if (media < 5) {
        resultado2.textContent = 'Você está de recuperação';

    } else if (media >= 5 && media < 7) {
        resultado2.textContent = 'Você está aprovado';

    } else if (media >= 7 && media <= 10) {
        resultado2.textContent = 'Você está aprovado';

    } else {
        resultado2.textContent = 'Nota inválida';
    }
}