Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 11/02/2026
Var
// Seção de Declarações das variáveis 
nome: caractere
primeira_nota: real
segunda_nota: real
terceira_nota: real
soma: real
media: real
resultado: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite o nome o nome do aluno: ")
leia(nome)

escreva("Digite a primeira nota: ")
leia(primeira_nota)
escreva("Digite a segunda nota: ")
leia(segunda_nota)
escreva("Digite a terceira nota: ")
leia(terceira_nota)

soma <- primeira_nota + segunda_nota + terceira_nota
media <- soma/3

se media >= 7 então
   resultado <- "Aprovado"
senão
     resultado <- "Reprovado"
fimse

escreval
escreval(" soma:", soma)
escreval(" média", media)
escreval(" O aluno", nome, "está" , resultado )
Fimalgoritmo