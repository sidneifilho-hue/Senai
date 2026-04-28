import os

usuarios = []

def limpar_tela():
    os.system("cls" if os.name == "nt" else "clear")

def criar_usuario():
    nome = input("Nome: ")
    usuario = {
        "nome": nome,
        "saldo": 0
    }
    usuarios.append(usuario)
    print("Usuário criado com sucesso!\n")

def encontrar_usuario(nome):
    for u in usuarios:
        if u["nome"] == nome:
            return u
    return None

def depositar():
    nome = input("Nome do usuário: ")
    usuario = encontrar_usuario(nome)

    if usuario:
        valor = float(input("Valor para depositar: "))
        usuario["saldo"] += valor
        print("Depósito realizado!\n")
    else:
        print("Usuário não encontrado!\n")

def sacar():
    nome = input("Nome do usuário: ")
    usuario = encontrar_usuario(nome)

    if usuario:
        valor = float(input("Valor para sacar: "))
        if valor <= usuario["saldo"]:
            usuario["saldo"] -= valor
            print("Saque realizado!\n")
        else:
            print("Saldo insuficiente!\n")
    else:
        print("Usuário não encontrado!\n")

def ver_saldo():
    nome = input("Nome do usuário: ")
    usuario = encontrar_usuario(nome)

    if usuario:
        print(f"Saldo de {usuario['nome']}: R$ {usuario['saldo']}\n")
    else:
        print("Usuário não encontrado!\n")

def menu():
    while True:
        print("***** BANCO DE SALVADOR *****")
        print("1 - Criar usuário")
        print("2 - Depositar")
        print("3 - Sacar")
        print("4 - Ver saldo")
        print("5 - Sair")

        opcao = input("Escolha uma opção: ")

        limpar_tela()

        if opcao == "1":
            criar_usuario()
        elif opcao == "2":
            depositar()
        elif opcao == "3":
            sacar()
        elif opcao == "4":
            ver_saldo()
        elif opcao == "5":
            print("Obrigado! Volte sempre")
            break
        else:
            print("Opção inválida!\n")

# Executar sistema
menu()