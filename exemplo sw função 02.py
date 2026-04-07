import os

os.system("cls")

def saudacao(nome):
    print(f"Olá, {nome}! Bem-vindo (a) ao nosso site.")

nome_visitante = input("Digite seu nome: ")
saudacao(nome_visitante)