import os

# Função sem retorno para mostrar logo
def logoSenai():
    os.system("cls || clear")
    print("=== SENAI ===")

# Função para calcular IMC e retornar valor e situação
def calcular_imc(peso, altura):
    imc = peso / (altura * 2)
    if imc < 18.5:
        situacao = "Abaixo do peso"
    elif 18.5 <= imc < 25:
        situacao = "Peso normal"
    elif 25 <= imc < 30:
        situacao = "Sobrepeso"
    elif 30 <= imc < 35:
        situacao = "Obesidade grau I"
    elif 35 <= imc < 40:
        situacao = "Obesidade grau II"
    else:  # imc >= 40
        situacao = "Obesidade grau III (mórbida)"
    return imc, situacao

# Função para exibir informações completas dos usuários
def exibir_dados(nomes, sobrenomes, idades, alturas, pesos):
    logoSenai()
    print("\nDados completos dos usuários:\n")
    for i in range(len(nomes)):
        nome_completo = f"{nomes[i]} {sobrenomes[i]}"
        imc, situacao = calcular_imc(pesos[i], alturas[i])
        print(f"Usuário {i+1}:")
        print("Nome completo:", nome_completo)
        print("Idade:", idades[i])
        print("Altura:", alturas[i], "metros")
        print("Peso:", pesos[i], "kg")
        print(f"IMC: {imc:.2f}")
        print("Situação:", situacao)
        print()

# Listas para armazenar dados dos usuários
nomes = []
sobrenomes = []
idades = []
alturas = []
pesos = []

# Loop para coletar dados
while True:
    logoSenai()
    nome = input("Digite o nome do usuário (ou 'sair' para encerrar): ")
    if nome.lower() == 'sair':
        break
    sobrenome = input("Digite o sobrenome do usuário: ")
    idade = int(input("Digite a idade do usuário: "))
    altura = float(input("Digite a altura do usuário (em metros): "))
    peso = float(input("Digite o peso do usuário (em kg): "))

    nomes.append(nome)
    sobrenomes.append(sobrenome)
    idades.append(idade)
    alturas.append(altura)
    pesos.append(peso)

# Exibir os dados completos após a coleta
exibir_dados(nomes, sobrenomes, idades, alturas, pesos)