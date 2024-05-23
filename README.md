# Aplicação Node.js com Docker usando Docker Compose

Este repositório contém um exemplo simples de configuração e execução de uma aplicação Node.js utilizando Docker Compose para ambientes de desenvolvimento e produção.

## Estrutura do Projeto

```
Node-Docker-Application/
│
├── Dockerfile
├── docker-compose.dev.yaml
├── docker-compose.prod.yaml
├── package.json
└── server.js
```

- **Dockerfile**: Arquivo de configuração do Docker para construir a imagem da aplicação Node.js.
- **docker-compose.dev.yaml**: Arquivo de configuração do Docker Compose para ambiente de desenvolvimento.
- **docker-compose.prod.yaml**: Arquivo de configuração do Docker Compose para ambiente de produção.
- **package.json**: Arquivo de configuração do Node.js.
- **server.js**: Código-fonte da aplicação Node.js.

## Docker Compose

O Docker Compose é uma ferramenta para definir e executar aplicativos Docker de vários contêineres. Com o Docker Compose, você pode usar arquivos YAML para configurar a estrutura do seu aplicativo e os serviços necessários em diferentes ambientes.

## Como Usar

1. Certifique-se de ter o Docker e o Docker Compose instalados em seu sistema.

2. Clone este repositório:

   ```
   git clone https://github.com/lucassouza4/Node-Docker-Application.git
   ```

3. Navegue até o diretório do projeto:

   ```
   cd Node-Docker-Application
   ```

4. Para executar o contêiner em ambiente de desenvolvimento, execute o seguinte comando:

   ```
   docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d --build
   ```

   Isso iniciará os contêineres conforme definido nos arquivos `docker-compose.yaml` e `docker-compose.dev.yaml`. A aplicação Node.js estará disponível em `http://localhost:3000`.

5. Para executar o contêiner em ambiente de produção, execute o seguinte comando:

   ```
   docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build
   ```

   Isso iniciará os contêineres conforme definido nos arquivos `docker-compose.yaml` e `docker-compose.prod.yaml`. A aplicação Node.js estará disponível em `http://localhost:3000`.

## Interrompendo os Contêineres

Para interromper os contêineres e remover os volumes associados, execute os seguintes comandos:

- Para ambiente de desenvolvimento:

  ```
  docker compose -f docker-compose.yaml -f docker-compose.dev.yaml down
  ```

- Para ambiente de produção:

  ```
  docker compose -f docker-compose.yaml -f docker-compose.prod.yaml down
  ```

## Personalização

Você pode personalizar a configuração do Docker Compose conforme necessário para atender aos requisitos específicos do seu projeto. Consulte a [documentação oficial do Docker Compose](https://docs.docker.com/compose/) para obter mais detalhes sobre como configurar o Docker Compose.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Envie pull requests ou abra issues para relatar problemas e sugerir melhorias.