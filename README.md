# Projeto de Plataforma de Aluguel de Garagens - Garashare

## Descrição do Projeto

Este projeto visa a implementação de uma plataforma para aluguel de garagens, utilizando diversas tecnologias e decisões estratégicas para garantir um ambiente robusto, seguro e eficiente.

## Tecnologias Adotadas

### Servidores

Para o armazenamento e gerenciamento de dados, utilizamos os servidores de banco de dados da Azure. A escolha da Azure se deve à sua confiabilidade, escalabilidade e robustez.

### Linguagens de Programação

As principais linguagens de programação utilizadas no desenvolvimento do projeto são:

- **HTML**: Utilizado para a estruturação das páginas web.
- **CSS**: Utilizado para a estilização das páginas web.
- **JavaScript**: Responsável pela interatividade e funcionalidades dinâmicas do frontend.

### Frameworks e Componentes

Adotamos o framework **Vue.js** para o desenvolvimento da interface do usuário. O Vue.js foi escolhido por sua flexibilidade, facilidade de integração com outras bibliotecas e frameworks, e pela sua capacidade de criar aplicações web modernas e reativas.

### Ambiente de Execução

O ambiente de execução selecionado para o projeto é o **Node.js**, que permite a execução do JavaScript no lado do servidor, proporcionando maior eficiência e desempenho na manipulação de dados e comunicação entre o frontend e o backend.

## Regras de Negócio

1. Garantir que as garagens não forneçam acesso às moradias dos proprietários.
2. Respeitar os termos e condições estabelecidos pelos proprietários durante o processo de reserva.
3. Uso responsável das garagens pelos locatários, em conformidade com as leis locais.
4. Encorajar os usuários a fornecer feedback honesto e construtivo sobre suas experiências de aluguel.

## Requisitos Funcionais

1. Registro de usuários como proprietários ou locatários.
2. Listagem de garagens disponíveis para aluguel.
3. Pesquisa e visualização de garagens por critérios específicos.
4. Reserva de garagens com especificação de datas e horários.
5. Confirmação ou rejeição de reservas por parte dos proprietários.
6. Cancelamento de reservas dentro de um período determinado.
7. Possibilidade de os usuários deixarem feedback sobre as experiências de aluguel.

## Requisitos Não Funcionais

1. Interface intuitiva e responsiva.
2. Privacidade e segurança garantidos pela separação entre garagens e moradias.
3. Desempenho rápido e escalabilidade da plataforma.
4. Implementação de medidas de segurança para proteger os dados dos usuários.

## Instalação

1. Clone o repositório:
    ```bash
    git clone <https://github.com/bodelha/garage-for-rent>
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd nome_do_projeto
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```

## Execução

Para iniciar o servidor, execute:
```bash
node server.js
```
A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).
