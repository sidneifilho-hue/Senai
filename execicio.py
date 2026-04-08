import os

os.system("cls")
#Função sem parâmetro e sem retorno.
def logo ():
    os.system("cls")
    print("========")
    print("  SENAI")
    print("========")



#Função com parâmetro e com retorno.
def somar(a, b):
    return a + b


#Função com parâmetro e com retorno.
def subtrair(a, b):
    return a - b


#Função com parâmetro e sem retorno.
def multiplicar(a, b):
    multiplicacao = a * b
    print(f"Multiplicação: {multiplicacao}")

def dividir(a, b):
    divisao = a / b
    print(f"Divisão: {divisao}")


logo()
print ("= Solicitando dados para a soma =")
n1 = int(input(" Digite o primeiro número: "))
n2 = int(input(" Digite o segundo número: "))

soma = somar(n1, n2)
subtracao = subtrair(n1, n2)

logo()
print("= Exibindo dados =")
print(f"Soma: {soma}")
print(f"Subtração: {subtracao}")
multiplicacao = multiplicar(n1, n2)
Divisao = dividir(n1, n2)