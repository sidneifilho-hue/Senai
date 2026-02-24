import os

# Limpa o terminal.
os.system("cls")

print("-Solicitando dados-")
nome = input("Digite seu nome:")

primeira_nota = float(input("Digite a primeira nota:"))
segunda_nota = float(input("Digite a segunda nota:"))

# calcule.

# Mostre o nome e a média. 

média = (primeira_nota + segunda_nota)/2

print(f"o aluno {nome} está com a média {média}") 