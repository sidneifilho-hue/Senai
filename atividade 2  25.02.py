import os

os.system ("cls || clear")

idade = int(input(" Digite sua idade: "))

if idade >= 65:
    print (" Não são obrigados a votar")
elif idade >= 18:
    print (" voto obrigatório")
elif idade >= 16:
    print (" voto opcional")
else:
    print("Não podem votar")    
    