import os

os.system("cls")

impares = 0
pares = 0

for i in range(5):
    numero = int(input(" Digite um número: "))
    if numero % 2 == 0:
        pares += 1
    else:
        impares += 1

print(f"Pares:{pares}")
print(f"Impares:{impares}")