import os

os.system ("cls||clear")

matricula = input("Digite sua matricula")

ano_nascimento = int(input("Digite seu ano de nascimento:"))

tempo_de_trabalho = int(input(" Digite seu tempo de trabalho: "))


idade = 2026 - ano_nascimento
if idade >= 65 or tempo_de_trabalho >= 30:
    resultado = "Requerer Aposentadoria"
else:
    resultado = "Não requerer aposentadoria"
        
print("\n- Resultado -")
print(f"idade: {idade}")
print(f" Tempo de trabalho: {tempo_de_trabalho}") 
print(f"Resultado: {resultado}")