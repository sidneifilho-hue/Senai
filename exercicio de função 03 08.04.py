import os
from datetime import date

os.system("cls")  

def calcular_idade():
    ano_nascimento = int(input("Digite o ano de nascimento: "))
    ano_atual = date.today().year  
    idade = ano_atual - ano_nascimento
    return idade

idade = calcular_idade()
print(f"A idade é: {idade}")