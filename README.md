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

Finalmente execute "ng serve" no terminal do diretório /frontend e abra o endereço http://localhost:4200 no seu navegador.

## Arquitetura
1. **Back-End**
A arquitetura utilizada foi baseada na Clean Architecture desenvolvida por Robert C. Martin, com o objetivo de organizar o código para encapsular a lógica de negócios, mas manter separado do mecanismo de entrega.
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/044b6e23-ed45-4ebb-bb11-b866e1d09fe0)
Fonte: https://medium.com/luizalabs/descomplicando-a-clean-architecture-cf4dfc4a1ac6

Como observado a Clean Architecture é conceito de design de software baseado em camadas. Dentre as vantagens de utilizar esse modelo, podemos citar:
    - Testável. As regras de negócios podem ser testadas sem a interface do usuário, banco de dados, servidor ou qualquer outro elemento externo;
    - Independente da interface do usuário. A interface do usuário pode mudar facilmente, sem alterar o restante do sistema. Uma UI da Web pode ser substituída por uma UI do console, por exemplo, sem alterar as regras de negócios;
    - Independente de banco de dados. Você pode trocar o Oracle ou SQL Server, por Mongo, BigTable, CouchDB ou qualquer outro. Suas regras de negócios não estão vinculadas ao banco de dados;
    - Independente de qualquer agente externo. Na verdade, suas regras de negócios simplesmente não sabem nada sobre o mundo exterior, não estão ligadas a nenhum Framework.

A separação de camadas me poupa muitos problemas futuros com a manutenção do software. A regra de dependência bem aplicada me deixa com um sistema completamente testável. Quando um framework, um banco de dados ou uma API se tornar obsoleto, a substituição de uma camada não será uma dor de cabeça para mim. Além disso, isso garante a integridade do core do projeto.

Portanto, os diretórios dos arquivos estão distruidos da seguinte forma:

![arquitetura backend](https://github.com/mallon-costa/TesteSinobras/assets/55391088/fbdf2882-e12e-425f-a116-a3e9f015da03)
Fonte: Autor

Segue as seguinte vantagens de projetar o sistema com a organização apresentada:

    - Organização Estruturada: O sistema divide claramente os componentes em quatro categorias: Domínio, Infraestrutura, Aplicação e Controladores. Isso facilita a manutenção e a colaboração entre desenvolvedores.
    - Separação de Responsabilidades: Cada categoria tem um propósito específico. Por exemplo, o Domínio contém Modelos e DTOs, enquanto a Infraestrutura abriga Conexões de Banco de Dados e Repositórios. Essa separação ajuda a manter o código limpo e modular.
    - Escalabilidade: A estrutura permite que você adicione ou modifique componentes sem afetar outras partes do sistema. Isso é crucial para a escalabilidade de uma API.
    - Manutenção Simplificada: Com essa organização, é mais fácil localizar e corrigir problemas. Além disso, a clareza na estruturação ajuda novos desenvolvedores a entender o projeto mais rapidamente.

2. **Front-End**
A estrutura de pastas utilizada foi simples, baseando-se no modelo padrão do angular:

    - obj
    - providers
    - node_modules
    - src
        - app
            - about
            - collaborators
            - home
            - register
            - register-point
            - report
            - app.component.css
            - app.component.html
            - app.component.spec.ts
            - app.component.ts
            - app.config.ts
        - assets
        - environments
        - favicon.ico
        - index.html
        - main.ts
        - styles.css
    - .editorconfig
    - angular.json
    - Dockerfile
    - package.json
    - package-lock.json

Em que:
    - /providers contém funções de requisições http; 
    - /assets contém as imagens utilizadas no projeto;
    - /environments contém os arquivos que contém as variáveis de ambiente;
    - /app contém as páginas e os componentes do sistema.
