# Sistema de Gerenciamento de Colaboradores - Teste de Analista Júnior / Sinobras

## Sobre o Sistema

Este projeto visa desenvolver uma aplicação básica para gerenciamento de colaboradores, com funcionalidades principais que incluem o cadastro de colaboradores, registro de ponto e geração de relatórios.
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/091ec101-c272-480f-b7ca-7fb284cdd779)


A seguir são listadas algumas funcionalidades do sistema.

1. **Colaboradores:**
    - Listar;
    - Adicionar;
    - Remover;
    - Atualizar.

![2024-03-27 09-26-33](https://github.com/mallon-costa/TesteSinobras/assets/55391088/1068dcde-292b-4c16-836f-c4d2ecbcda23)


2. **Colaboradores:**
    - Registrar entrada (somente horário comercial);
    - Registrar saída (somente horário comercial);
    - Verificar se já houve registro hoje.

![2024-03-27 09-27-57](https://github.com/mallon-costa/TesteSinobras/assets/55391088/45a1a5f0-f628-4cc4-b9de-06d4538d288b)


3. **Relatório:**
    - Pesquisar por mês e ano;
    - Visualizar o tempo total de trabalho;
    - Apresentação de um gráfico de horas totais.

![2024-03-27 09-28-27](https://github.com/mallon-costa/TesteSinobras/assets/55391088/ed9dc32b-fef3-4b34-a309-c7ad67d5bb4c)



## Instalação

1. **Docker Compose + Visual Studio (Recomendada)**
Requisitos:
    - Docker;
    - Docker Compose;
    - Visual Studio Community, Professional ou Entreprise.

Com o docker e o docker instalado na sua máquina, basta executar o arquivo Webapi.sln com o Visual Studio ou abrir o diretório raiz do projeto com o Visual Studio e clicar no botão **Docker compose**, como demonstrado abaixo. Se tudo dê certo, será recebido com uma tela de boas vindas ao acessar http://localhost:4200

![2024-03-27 14-08-23](https://github.com/mallon-costa/TesteSinobras/assets/55391088/26bddde4-fe3c-4b6c-8882-caafe84eec9b)

    - Front-End = http://localhost:4200
    - Back-End = http://localhost:5000
    - Banco de Dados = Porta: 5432, Senha: 123, Nome: system_employee, User: postgres

2. **Instalação Local**
Requisitos:
    - ASP.NET Core 8.0;
    - Angular CLI 17.3.1;
    - Node 20.10.0;
    - Package Manager Npm 10.2.3;
    - PostegreSQL;

Abra o diretório Webapi e localize o arquivo "ConnectionContext.cs" dentro de /Infrastructure, na linha 12 mude "Server=postgres;" para "Server=localhost".
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/c37708f3-09f4-47ae-927e-7ad5f92774a2)

Execute o Back-End executando o comando "dotnet run" na pasta Webapi e copie o endereço de execução apresentado no terminal.
Abra o diretório /frontend e execute "npm install". Após isso, abra o arquivo environment.ts localizado em src/enviroments e mude o valor da variável urlApi para o endereço do Back-End da etapa anterior
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/83c4e5d7-12a8-49bf-904f-a0f4f5050916)

Finalmente execute "ng serve" no terminal do diretório /frontend

