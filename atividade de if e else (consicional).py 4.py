import os

os.system("cls || clear")

nome = input("Digite o nome do aluno:")

n1 = float(input("Digite o primeiro resultado: "))
n2 = float(input("Digite o segundo resultado: "))
n3 = float(input("Digite o terceiro resultado: "))

media = (n1 + n2 + n3)/3

print ("resultado da média:", media)

if media >= 7:
    print(f"O aluno {nome} está aprovado")
else:
    print(f"O aluno {nome} está reprovado")