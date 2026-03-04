import os 

os.system("cls||clear")

media = float(input(" Digite sua média: "))

faltas = int(input(" Digite seu número de faltas: "))

if media >= 7.0 and faltas <= 40:
    print(" APROVADO ")
else:
    print(" REPROVADO ")