import os

# limpa o terminal
os.system("cls || clear")

idade = int(input("Digite sua idade:"))

#condicional simples
if idade < 18:
    print("Acesso negado.")
    
print("Programa encerrado")

