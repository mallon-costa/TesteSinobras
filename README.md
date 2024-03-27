# Sistema de Gerenciamento de Colaboradores - Teste de Analista Júnior / Sinobras

## Candidato
**Manoel Malon Costa de Moura**

**Email: malloncosta@outlook.com**

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


2. **Registrar Ponto:**
    - Registrar entrada (somente horário comercial);
    - Registrar saída (somente horário comercial);
    - Verificar se já houve registro hoje.

![2024-03-27 09-27-57](https://github.com/mallon-costa/TesteSinobras/assets/55391088/45a1a5f0-f628-4cc4-b9de-06d4538d288b)


3. **Relatório:**
    - Pesquisar por mês e ano;
    - Visualizar o tempo total de trabalho;
    - Apresentação de um gráfico de horas totais.

![2024-03-27 09-28-27](https://github.com/mallon-costa/TesteSinobras/assets/55391088/ed9dc32b-fef3-4b34-a309-c7ad67d5bb4c)

# Estruturação
O diretório raiz do projeto é organizado da seguinte forma:
- Avatares: ma pasta para armazenar avatares de usuários.
- bin: contém arquivos binários e executáveis do projeto.
- Database: contém arquivos relacionados ao banco de dados, como scripts SQL.
- frontend: essa pasta contém o código-fonte do frontend do aplicativo.
- docker-compose.override.yml: arquivo de configuração do Docker Compose para substituir valores padrão.
- docker-compose.yml: arquivo de configuração principal do Docker Compose.
- employee.sql: um script SQL para criar tabelas e inserir dados no banco de dados.
- launchSettings.json: configurações de lançamento para depuração.
- README.md: arquivo de documentação.
- Webapi.sln: Arquivo de solução do Visual Studio relacionado à API da web.
- Webapi: arquivos e pastas relacionados à API da web.


## Ferramentas Utilizadas

1. Asp.Net 8.0: framework de desenvolvimento web, criado pela Microsoft, que permite a construção de aplicativos e sites dinâmicos e interativos. Baseado na plataforma .NET, o ASP.NET oferece uma ampla gama de ferramentas e recursos para o desenvolvimento rápido e eficiente de aplicações web, incluindo suporte para linguagens de programação como C# e Visual Basic. Ele utiliza o modelo de programação baseado em eventos, onde os desenvolvedores podem criar componentes reutilizáveis e interagir com o ciclo de vida da página web. Além disso, o ASP.NET oferece recursos avançados de segurança, gerenciamento de sessão, manipulação de dados e integração com outras tecnologias da Microsoft, tornando-o uma escolha popular para o desenvolvimento de aplicações web escaláveis e seguras.

![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/a3a8a638-249b-4a6c-8ba2-b68c25868294)

Fonte: https://www.dialhost.com.br/ajuda/asp-net-upload-de-arquivos/


2. PostgreSQL 16.2: é um poderoso sistema de gerenciamento de banco de dados relacional de código aberto. Ele oferece uma ampla gama de recursos avançados e é conhecido por sua confiabilidade, escalabilidade e conformidade com os padrões do setor. Permite armazenar, recuperar, manipular e analisar grandes volumes de dados de forma eficiente. Além disso, ele suporta consultas complexas, transações ACID (Atomicidade, Consistência, Isolamento e Durabilidade), replicação de dados, integridade referencial e extensibilidade através de funções e procedimentos armazenados. Sua natureza de código aberto incentiva a comunidade a contribuir para seu aprimoramento contínuo, tornando-o uma escolha popular para aplicações de missão crítica em diversos setores.
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/27b11e8b-8253-4f9f-9ac8-8fc53191f69e)
Fonte: https://www.driven.com.br/blog/postgre-sql/

3. Angular 13.7.1: é um framework de desenvolvimento front-end mantido pelo Google, projetado para criar aplicativos web de página única (SPAs) escaláveis e dinâmicos. Utilizando a linguagem TypeScript, Angular oferece uma arquitetura baseada em componentes, onde cada parte da interface do usuário é encapsulada em componentes reutilizáveis. Além disso, fornece recursos poderosos, como injeção de dependência, roteamento, validação de formulários, comunicação com servidor por meio de HTTP, entre outros. A abordagem de two-way data binding facilita a sincronização automática entre o modelo e a visualização, proporcionando uma experiência de desenvolvimento mais fluida. Com uma vasta comunidade de desenvolvedores e uma documentação abrangente, Angular é uma escolha popular para a construção de aplicações web modernas e robustas.
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/d09a9418-72da-4afa-994b-4a0083d81e4a)
Fonte: https://www.infoq.com/news/2024/01/angular-17-new-branding/

4. Visual Studio 2022: ambiente de desenvolvimento integrado (IDE) desenvolvido pela Microsoft, utilizado principalmente para criar aplicativos de software para plataformas Windows, Android, iOS e web. Ele oferece uma ampla gama de recursos, incluindo suporte para várias linguagens de programação, como C#, Visual Basic, C++, Python e JavaScript, facilitando o desenvolvimento de aplicativos em diversos contextos. O Visual Studio oferece ferramentas de edição de código avançadas, depuração, compilação e integração com controle de versão, proporcionando aos desenvolvedores um ambiente de desenvolvimento completo e eficiente. Além disso, possui extensibilidade, permitindo aos desenvolvedores personalizarem e estenderem o IDE de acordo com suas necessidades específicas, tornando-o uma escolha popular entre os profissionais de desenvolvimento de software.
![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/87144a0d-57ba-448d-a36b-81b19121e31c)
Fonte: https://venturebeat.com/business/microsoft-launches-visual-studio-online-public-preview-and-ml-net-1-4/

5. Stable Diffusion 2.7: o Stable Diffusion é uma técnica de geração de imagens por meio de inteligência artificial (IA). É baseado em um modelo de aprendizado de máquina conhecido como Diffusion Probabilistic Models, que permite a criação de imagens realistas e de alta qualidade. A "difusão" refere-se ao processo de aplicação de uma série de passos iterativos para gerar uma imagem. O termo "estável" indica que o modelo é capaz de manter a estabilidade ao longo desses passos, evitando o colapso ou a perda de detalhes importantes durante o processo de geração. O Stable Diffusion utiliza uma técnica chamada sampling, que envolve a amostragem de uma distribuição de probabilidade para cada pixel da imagem, de forma a garantir que a imagem gerada seja realista e coerente com as características aprendidas pelo modelo.

![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/d7331bf6-e0bd-4d84-9181-a70aed12724c)

Fonte: https://usnwb.com/stable-diffusion/



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
Fonte: Autor.

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

As vantagens de usar essa arquitetura são:

    - Organização Clara: Os arquivos estão bem organizados, tornando fácil para os desenvolvedores encontrar o que precisam.
    - Separação de Responsabilidades: Os componentes, serviços e outros arquivos estão separados em suas próprias pastas, promovendo uma separação clara de responsabilidades.
    - Facilita a Colaboração: Vários desenvolvedores podem trabalhar em diferentes partes do aplicativo sem interferir uns nos outros.
Portanto, essa estrutura promove uma arquitetura limpa e eficiente para o desenvolvimento de aplicativos Angular.

3. **Banco de Dados**
Para a construção do banco de dados foi necessário somente duas tabelas, uma para os colaboradores e outra para registrar os pontos de cada um.

![drawSQL-image-export-2024-03-27 (1)](https://github.com/mallon-costa/TesteSinobras/assets/55391088/1ae47ed0-f169-4e75-a418-54f452b3cda8)
Fonte: Autor.

Contém informações básicas de cada colaborador e também um campo para armazenar o caminho de foto de cada um. Este armazenamento por sua vez é feito na própria API Asp.Net usando um diretório exclusivo. Perceba que a relação é de 1 para muitos, ou seja, um colaborador pode contém vários registros de pontos correspondentes a cada dia útil do mês. Basta, portanto, os métodos para manipular essas informações, tais como listar os registros de cada colaborador a cada mês e verificar se já houve registro no dia atual.
Todos os campos apresentados da tabela employee são obrigatórios para preenchimento.

## Avatares
No diretório raiz do sistema, existe uma pasta denominada "/Avatares" que armazena imagens PNG geradas por Inteligência Artificial, produzidas pelo proprietário utilizando a ferramenta de geração de imagens Stable Diffusion. Essas imagens são geradas com o objetivo de simplificar a seleção de avatares para cada colaborador, ao mesmo tempo em que garantem a proteção dos direitos autorais em caso de uso por terceiros.

![image](https://github.com/mallon-costa/TesteSinobras/assets/55391088/05ecf45b-2b80-42ab-9daf-82881b9deef5)
Fonte: Autor.

## Fim
![legal-okay](https://github.com/mallon-costa/TesteSinobras/assets/55391088/69f67208-dd7f-477b-8a10-4cda73a90d42)


Qualquer dúvida, favor, entrar em contato.


