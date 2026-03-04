import os

os.system("cls||clear")

nota = float (input(" Digite uma nota: "))

if nota >= 0 and nota <= 10: 
    print(nota)
else:
    print(" A nota deve ser entre zero e dez ")