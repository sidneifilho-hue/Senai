import os

os.system("cls")

soma = 0 
QUANTIDADE_NOTA = 3

for i in range(QUANTIDADE_NOTA):
    nota = float(input("Digite uma nota: "))
    soma += nota

media = soma / QUANTIDADE_NOTA

if media >=7:
    resultado = "aprovado"
elif media <= 4:
    resultado = "Reprovado"
else:
    resultado = " Recuperação"

print(f"média: {media}")
print (f"resultado: {resultado}")