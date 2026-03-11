import os
os.system("cls")
import time

numero = int(input("Digite um número: "))
print("numero: ",numero)

for i in range (numero, 0, -1):
    print(i)
    time.sleep(1)