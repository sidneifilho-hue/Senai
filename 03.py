import os

os.system("cls")

numero = int(input("Digite um número para a tabuada: "))

for i in range (10):
    resultado = numero * i
    print(f"{i} x {numero} = {resultado} ")