import os
import time

os.system("cls")

soma = 0 

for i in range (5):
    numero = int(input("Digite um número: "))
    soma = soma + numero
    
    print(f"Soma: {soma}")
    time.sleep(1)
