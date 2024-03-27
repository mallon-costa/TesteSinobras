# Sistema de Gerenciamento de Colaboradores - Teste de Analista Júnior / Sinobras

## Sobre o Sistema

Este projeto visa desenvolver uma aplicação básica para gerenciamento de colaboradores, com funcionalidades principais que incluem o cadastro de colaboradores, registro de ponto e geração de relatórios.

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
Com o docker e o docker instalado na sua máquina, basta executar o arquivo Webapi.sln com o Visual Studio ou abrir o diretório raiz do projeto com o Visual Studio e clicar no botão **Docker compose**, como demonstrado abaixo. Se tudo dê certo, será recebido com uma tela de boas vindas ao acessar http://localhost:4200

![2024-03-27 14-08-23](https://github.com/mallon-costa/TesteSinobras/assets/55391088/26bddde4-fe3c-4b6c-8882-caafe84eec9b)

    - Front-End = http://localhost:4200
    - Back-End = http://localhost:5000
    - Banco de Dados = Porta: 5432, Senha: 123, Nome: system_employee, User: postgres

2. **Instalação Local**
É possível realiazar a instalação local também
