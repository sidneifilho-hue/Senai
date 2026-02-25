import os 

os.system("cls || clear")

n1 = int(input("Digite o primeiro número: "))
n2 = int(input("Digite o segundo número: "))

media = (n1 + n2)/2

soma = n1 + n2 

produto = n1 * n2

print ("RESOLUÇÂO")


print (f" A média é {media}")
print (f" a soma é {soma}")
print (f" o produto é {produto}")

if n1==n2:
    print(" O primeiro número é igual ao segundo")

if n1 > n2:
    print(" O primeiro número é maior que o segundo")
    
if n2 > n1:
    print(" O segundo número é maior que o primeiro") 