import os

os.system("cls")

# Função para ler números inteiros e armazenar em uma lista
def ler_numeros(qtd):
    numeros = []
    for i in range(qtd):
        num = int(input(f"Digite o {i+1}º número: "))
        numeros.append(num)
    return numeros

# Função para processar estatísticas de uma lista de números
def estatisticas(numeros):
    quantidade_pares = 0
    quantidade_impares = 0
    quantidade_positivos = 0
    quantidade_negativos = 0
    soma_pares = 0
    soma_impares = 0
    soma_geral = 0

    for num in numeros:
        # Pares e ímpares
        if num % 2 == 0:
            quantidade_pares += 1
            soma_pares += num
        else:
            quantidade_impares += 1
            soma_impares += num
        
        # Positivos e negativos
        if num > 0:
            quantidade_positivos += 1
        elif num < 0:
            quantidade_negativos += 1
        
        # Soma geral
        soma_geral += num

    # Maior e menor número
    maior_numero = max(numeros)
    menor_numero = min(numeros)
    
    # Quantidade total
    quantidade_total = len(numeros)

    # Médias
    media_pares = soma_pares / quantidade_pares if quantidade_pares > 0 else 0
    media_impares = soma_impares / quantidade_impares if quantidade_impares > 0 else 0
    media_geral = soma_geral / quantidade_total

    # Retornar um dicionário com todos os resultados
    return {
        "quantidade_pares": quantidade_pares,
        "quantidade_impares": quantidade_impares,
        "quantidade_positivos": quantidade_positivos,
        "quantidade_negativos": quantidade_negativos,
        "quantidade_total": quantidade_total,
        "maior_numero": maior_numero,
        "menor_numero": menor_numero,
        "media_pares": media_pares,
        "media_impares": media_impares,
        "media_geral": media_geral,
        "numeros_inverso": numeros[::-1]
    }

# Função para exibir os resultados
def exibir_resultados(stats):
    print("\nEstatísticas dos números:")
    print(f"Quantidade de pares: {stats['quantidade_pares']}")
    print(f"Quantidade de ímpares: {stats['quantidade_impares']}")
    print(f"Quantidade de positivos: {stats['quantidade_positivos']}")
    print(f"Quantidade de negativos: {stats['quantidade_negativos']}")
    print(f"Quantidade de números inseridos: {stats['quantidade_total']}")
    print(f"Maior número: {stats['maior_numero']}")
    print(f"Menor número: {stats['menor_numero']}")
    print(f"Média dos números pares: {stats['media_pares']:.2f}")
    print(f"Média dos números ímpares: {stats['media_impares']:.2f}")
    print(f"Média geral: {stats['media_geral']:.2f}")
    print(f"Números na ordem inversa: {stats['numeros_inverso']}")

# Programa principal
numeros = ler_numeros(5)
stats = estatisticas(numeros)
exibir_resultados(stats)