import os

os.system("cls")

soma = 0
quantidade_notas = 0

while True:
    nota = float(input("Dígite uma nota:"))
    
    quantidade_notas += 1
    soma += nota
    
    resposta = input("deseja inserir mais uma nota? \nUse N ou S: ").upper()
    
    if resposta == "N":
        break
    
media = soma / quantidade_notas

print(f"\nMédia: {media}")