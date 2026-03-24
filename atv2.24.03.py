import os

os.system("cls")

soma = 0 
quantidade_numeros = 0

while True:
    numero = int(input("Digite um número: "))
    
    if numero < 0:
        break
    quantidade_numeros += 1
    soma += numero
    
media = soma / quantidade_numeros

print(f"\nMédia: {media}")