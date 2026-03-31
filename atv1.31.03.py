import os

os.system("cls")

menu = {
    1: ("Picanha", 25.00),
    2: ("Lasagna", 20.00),
    3: ("Stroganoff", 18.00),
    4: ("Bife Acebolado", 15.00),
    5: ("Pão com Ovo", 5.00)
}

total = 0
orders = []

while True:
    print("\nMenu:")
    for code, item in menu.items():
        print(f"{code} - {item[0]}: ${item[1]:.2f}")

    choice = int(input("Escolha um prato (1-5): "))

    if choice in menu:
        orders.append(menu[choice])
        total += menu[choice][1]
    else:
        print("opcão inválida!")

    cont = input("Deseja pedir outro prato? (sim/não):").lower()
    if cont != "sim":
        break

print("\nSeu pedido:")
for item in orders:
    print(f"{item[0]} - ${item[1]:.2f}")

print(f"\nTotal: ${total:.2f}")