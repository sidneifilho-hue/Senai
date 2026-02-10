Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/02/2026
Var
// Seção de Declarações das variáveis 
numero: inteiro
sucessor: inteiro
antecessor: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite um número:")
   leia(numero)
   
   sucessor <- numero + 1
   antecessor <- numero - 1
   
   escreval
   escreval("O sucessor de", numero, " é: ", sucessor)
   escreval("O atecessor de", numero, " é: ", antecessor)

Fimalgoritmo