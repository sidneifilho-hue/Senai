import os

os.system("cls")

soma = 0 
QUANTIDADE_NOTAS = 3

for i in range (QUANTIDADE_NOTAS):
    while True:
     n1 = float(input(f" Digite a {i+1}º nota: "))
     if n1 >= 0 and n1 <= 10:
        soma += n1
        break
    else:
        print("nota inválida")
        print("Tente novamente...\n")
        
    media = soma / QUANTIDADE_NOTAS
    
    print(f"Média: {media}")
            