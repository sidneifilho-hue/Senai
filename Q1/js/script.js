const capa = document.querySelector('#capa')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

bt1.addEventListener('click', Titanic)
bt2.addEventListener('click', Deadpool)
bt3.addEventListener('click', Capitao)
bt4.addEventListener('click', Batman)

function Titanic(){
    capa.src ='imagens/images.jpg'
    sinopse.textContent = 'Em Titanic (1997), dirigido por James Cameron, o jovem e humilde artista Jack Dawson (Leonardo DiCaprio) ganha uma passagem de terceira classe para a viagem inaugural do luxuoso navio RMS Titanic, considerado inafundável. A bordo, ele conhece Rose DeWitt Bukater (Kate Winslet), uma jovem aristocrata sufocada pelas exigências de sua posição social e prestes a se casar por conveniência com o arrogante Cal Hockley (Billy Zane). Apesar das profundas barreiras de classe e da oposição da família de Rose, os dois vivem uma intensa história de amor. No entanto, o romance se transforma em uma desesperada e emocionante luta pela sobrevivência quando a embarcação colide com um iceberg nas águas congelantes do Atlântico Norte.'
}
function Deadpool(){
    capa.src ='imagens/images (2).jpg'
    sinopse.textContent = 'Em Deadpool (2016), dirigido por Tim Miller, a história acompanha Wade Wilson (Ryan Reynolds), um ex-militar e mercenário de piadas rápidas que é diagnosticado com câncer terminal. Em busca de uma cura, ele aceita se submeter a um experimento clandestino do programa Weapon X. O procedimento ativa um fator de cura acelerado que o salva da doença, mas deixa seu corpo completamente desfigurado e sua mente ainda mais instável. Assumindo o alter ego Deadpool, armado com suas espadas, armas e um senso de humor sarcástico — além da capacidade de quebrar a quarta parede e falar diretamente com o público —, ele parte em uma jornada de vingança caçando Ajax (Ed Skrein), o homem responsável por torturá-lo, para tentar recuperar sua aparência e salvar seu grande amor, Vanessa (Morena Baccarin).'
}
function Capitao(){
    capa.src ='imagens/images (3).jpg'
    sinopse.textContent = 'Em Capitão América: O Primeiro Vingador (2011), dirigido por Joe Johnston, a história se passa durante a Segunda Guerra Mundial e acompanha Steve Rogers (Chris Evans), um jovem franzino e rejeitado pelo exército americano por conta de seus problemas de saúde. Determinado a servir ao seu país, ele se voluntaria para um experimento militar secreto que o injeta com o Soro do Super-Soldado, transformando-o em um combatente com força, agilidade e resistência no auge da capacidade humana. Sob a identidade de Capitão América e armado com seu icônico escudo de vibranium, Steve lidera as forças aliadas contra a HYDRA, a divisão científica nazista liderada pelo impiedoso Caveira Vermelha (Hugo Weaving), enquanto tenta proteger as pessoas que ama e conter uma ameaça capaz de mudar os rumos da humanidade.'
}
function Batman(){
    capa.src ='imagens/images (1).jpg'
    sinopse.textContent = 'Em Batman: O Cavaleiro das Trevas (2008), dirigido por Christopher Nolan, Batman/Bruce Wayne (Christian Bale), o tenente James Gordon (Gary Oldman) e o promotor público Harvey Dent (Aaron Eckhart) unem forças para desmantelar o crime organizado em Gotham City. A aliança demonstra eficácia, mas a cidade logo mergulha no caos absoluto com a ascensão do Coringa (Heath Ledger), um criminoso sádico e imprevisível que busca provar que até as pessoas mais puras podem ser corrompidas. Ao provocar uma série de atentados e dilemas morais brutais, o vilão força Batman a cruzar a linha entre o heroísmo e o vigilantismo, levando o Cavaleiro das Trevas ao seu limite físico e psicológico.'
}