import os 

os.system("cls||clear")

# menu
print(" menu ")
print("""
====================menu====================
código             prato               preço
1                 picanha           R$ 25.00
2                 lasanha           R$ 20.00
3                strognoff          R$ 18.00
4               bife acebolado      R$ 15.00
5                pão com ovo        R$ 5.00
      """)

codigo = int(input(" Digite o código do prato desejado: "))

match codigo:
    case "1":
        print("picanha - R$ 25.00")
    case "2":
        print("lasanha - R$ 20.00")
    case "3":
        print("strognoff - R$ 18.00")
    case "4":
        print("bife acebolado - R$ 15.00")
    case "5":
        print("pão com ovo - R$ 5.00")
    case _:
        print(" código errado ")
    
    