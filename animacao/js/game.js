//dom

const bola = document.querySelector('#caixa')

//evento

document.addEventListener('keydown',animar)

//função

function animar(evento){

    if(evento.key == 'ArrowUp'){
        bola.classList.add('bolaPular')
    }
    if(evento.key == 'ArrowDown'){
        bola.classList.remove('bolaPular')
    }

}