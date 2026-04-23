import os

os.system("cls") 

def autenticar():
    matricula = input("Digite sua matrícula: ")
    senha = input("Digite sua senha: ")
    print("Acesso concedido!\n")
    return matricula


def calcular_inss(salario):
    if salario <= 1518.00:
        desconto = salario * 0.075
    elif salario <= 2793.88:
        desconto = salario * 0.09
    elif salario <= 4190.83:
        desconto = salario * 0.12
    elif salario <= 8157.41:
        desconto = salario * 0.14
    else:
        desconto = 951.62  # teto
    return desconto


def calcular_irrf(base_calculo):
    if base_calculo <= 2428.80:
        return 0
    elif base_calculo <= 2826.65:
        return base_calculo * 0.075
    elif base_calculo <= 3751.05:
        return base_calculo * 0.15
    elif base_calculo <= 4664.68:
        return base_calculo * 0.225
    else:
        return base_calculo * 0.275


def calcular_vale_transporte(salario, opcao):
    if opcao.lower() == 's':
        return salario * 0.06
    return 0


def calcular_vale_refeicao(valor_vr):
    return valor_vr * 0.20


def calcular_plano_saude(dependentes):
    return dependentes * 150.00


def main():
    autenticar()

    salario_base = float(input("Digite o salário base (R$): "))
    vale_transporte_opcao = input("Deseja vale transporte? (s/n): ")
    valor_vr = float(input("Digite o valor do vale refeição (R$): "))
    dependentes = int(input("Digite a quantidade de dependentes: "))

    # Cálculos
    inss = calcular_inss(salario_base)
    irrf = calcular_irrf(salario_base - inss)
    vt = calcular_vale_transporte(salario_base, vale_transporte_opcao)
    vr = calcular_vale_refeicao(valor_vr)
    plano_saude = calcular_plano_saude(dependentes)

    total_descontos = inss + irrf + vt + vr + plano_saude
    salario_liquido = salario_base - total_descontos

    # Saída
    print("\n===== RESUMO DA FOLHA =====")
    print(f"Salário base: R$ {salario_base:.2f}")
    print(f"INSS: R$ {inss:.2f}")
    print(f"IRRF: R$ {irrf:.2f}")
    print(f"Vale Transporte: R$ {vt:.2f}")
    print(f"Vale Refeição: R$ {vr:.2f}")
    print(f"Plano de Saúde: R$ {plano_saude:.2f}")
    print(f"Total de descontos: R$ {total_descontos:.2f}")
    print(f"Salário líquido: R$ {salario_liquido:.2f}")


if __name__ == "__main__":
    main()