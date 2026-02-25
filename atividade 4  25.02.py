import os

os.system ("cls||clear")

n1 = int(input(" digite o 1° número:"))
n2 = int(input(" digite o 2° número:"))
n3 = int(input(" digite o 3° número:"))

maior = max(n1, n2, n3)
menor = min(n1, n2, n3)

print(f" Primeiro número: {n1}")
print(f" Segundo número: {n2}")
print(f" terceiro número: {n3}")
print(f" Maior número: {maior}")
print(f" Menor número: {menor}")