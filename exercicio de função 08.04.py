import os

os.system("cls")

def converter (metros):
    return metros * 100

metros = float(int(input("Digite o quantidade de metros: ")))

convercao = converter(metros) 

print("= Converção pronta =")
print(f" O número de centímetros é {convercao}")