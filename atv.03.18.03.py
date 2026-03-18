import os 

os.system("cls")

login_correto = "Sidnei"
senha_correto = "123456"
contador = 0 

while True:
    login = input(" Digite seu login: ")
    senha = input("Digite sua senha: ")
    
    login_esta_correto = login == login_correto
    senha_esta_correta = senha == senha_correto
    contador += 1
    
    if contador == 3:
        break
    
    if login_esta_correto and senha_esta_correta:
        print("Bem- vindo ao sistema!")
        break
    else:
        print("Login ou senha inválidos...")
        print("tente novamente... \n")