import os 

os.system("cls")

login_correto = "Sidnei"
senha_correto = "123456"

while True:
    login = input(" Digite seu login: ")
    senha = input("Digite sua senha: ")
    
    login_esta_correto = login == login_correto
    senha_esta_correta = senha == senha_esta_correta
    
    if login_esta_correta and senha_esta_correta:
        print("Bem-Vindo ao sistema!")
        break
    else:
        print ("Login ou Senha inválidas...")
        print (" Tente novamente ...\n")
