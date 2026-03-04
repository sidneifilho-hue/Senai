import os

os.system("cls||clear")

print (" selecão de alistamento ")

sexo = input(" Digite seu sexo: ") .lower()
ano_nascimento = float(input(" Digite sua idade: "))

idade = 2026 - ano_nascimento

sexo_obrigatorio = "masculino"
idade_obrigatoria = idade >=18

if sexo_obrigatorio and idade_obrigatoria:
    print(" Se apresente para o serviço militar obrigatório ")
else:
    print(" Não deve apresentar-se ")