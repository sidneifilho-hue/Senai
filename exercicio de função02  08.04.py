import os

os.system("cls")

def inflacionar(preco):
    if preco <  100:
        return preco * 1.10
    else:
        return preco * 1.20

inflacao = float(input("Digite o preço do produto: "))

novo_preco = inflacionar(inflacao)

print(f"O novo preço é : {novo_preco}")