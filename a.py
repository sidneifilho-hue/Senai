import os

os.system ("cls||clear")

nome = input(" digite o nome do aluno:")
n1 = int(input("Digite o primeiro nota: "))
n2 = int(input("Digite o segundo nota: "))

media= (n1+n2)/2
print (f" valor da média {media}")

if media >= 9:
    print (f" O aluno {nome} está aprovado ")
elif media >= 7.5:
    print(f" O aluno {nome} está aprovado ")
elif media >= 6:
    print(f" O aluno {nome} está aprovado ")   
elif media >= 4:
    print(f" O aluno {nome} está reprovado ")
else:
    print(f" O aluno {nome} está reprovado")
