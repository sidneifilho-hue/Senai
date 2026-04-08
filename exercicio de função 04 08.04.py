import os

os.system("cls")


def calcular_media(notas):
    return sum(notas) / len(notas)

notas = []

for i in range(3):
    notas = float(input(f"Digite a nota {i+1}: "))
    notas.append(notas)

media = calcular_media(notas)


print(f"A média das notas é: {media}")