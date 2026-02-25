import os

os.system ("cls||clear")

quantidade_macas = float(input(" Quantas maçâs são desejadas:"))

#menos_duzia = 1.30

#doze_macas = 1.00

if quantidade_macas <12:
    sp = (quantidade_macas * 1.30)
    print (f" valor da comprar: {sp}")
    print("comprar feita sem promoção ")
else:
    cp = (quantidade_macas * 1.00)
    print(f" valor da comprar: {cp}")
    print(" comprar feita com promção ")