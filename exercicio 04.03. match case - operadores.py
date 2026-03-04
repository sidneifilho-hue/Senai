import os 

os.system("cls||clear")

n1 = float(input(" Digite o primeiro número: "))
n2 = float(input(" Digite o segundo  número: "))
operador = input(" Digite um operador matemático (+ - * /): ")

print (f" primeiro número: {n1}")
print (f" segundo número: {n2}")

match operador:
    case " + ":
        resultado = n1 + n2
    case " - ":
        resultado = n1 - n2
    case " * ":
        resultado = n1 * n2
    case " / ":
        resultado = n1 / n2
    case _:
        print(" operador inválido ")
        resultado = 0 

print(f" resultado: {resultado}")   
    
