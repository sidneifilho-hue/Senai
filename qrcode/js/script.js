const input = document.querySelector('#entrada')
const botao = document.querySelector('#botao')
const qrcode = document.querySelector('#qrcode')

botao.addEventListener('click',gerar)

function gerar(){
    texto= input.value
    qrcode.innerHTML = ''
    new QRCode(qrcode,{
        text:texto,
        width:300,
        height:300,
        colorDark:'black',
        colorlight:'white',
    })
    
}