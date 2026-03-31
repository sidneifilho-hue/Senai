import os

os.system("cls")

numero = []
contagem_negativa = 0
soma_positiva = 0

for i in range(5):
    num = float(input(f"Digite o número {i+1}: "))
    numero.append(num)

    if num < 0:
        contagem_negativa += 1
    elif num > 0:
        soma_positiva += numero

print("Contagem de números negativos:", contagem_negativa)
print("Soma dos números positivos:", soma_positiva)