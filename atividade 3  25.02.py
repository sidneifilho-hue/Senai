import os 

os.system("cls || clear")

n1 = int(input("Digite o primeiro número: "))
n2 = int(input("Digite o segundo número: "))

maior = max(n1, n2)
menor = min(n1, n2)

print(f" Primeiro número: {n1}")
print(f" Segundo número: {n2}")
print(f" Maior número: {maior}")
print(f" Menor número: {menor}")