Algoritmo "semnome"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/02/2026
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade: inteiro
   primeira_nota: real
   segunda_nota: real
   soma: real
   media: real
   resultado: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o nome do aluno: ")
   leia(nome)
   escreva("Digite a idade do aluno: ")
   leia(idade)
   escreva("Digite a primeira nota: ")
   leia(primeira_nota)
   
   escreva("Digite a segunda nota: ")
   leia(segunda_nota)
   
   soma <- primeira_nota + segunda_nota
   media <- soma/2
   
   se media >= 7 então
      resultado <- "Aprovado"
   senao
      resultado <- "Reprovado"
   fimse
   
   escreval
   escreval("Nome: ", nome)
   escreval("Idade: ", idade, "anos")
   escreval("soma das notas: ", soma)
   escreval("média das notas:", media)
   escreval("resultado:", resultado)

Fimalgoritmo