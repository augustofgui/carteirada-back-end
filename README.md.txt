<h1 align="center">
  <center>Carteirada - API
</center>
</h1>

<p align="center">Nessa live vimos o poder do <a href="https://www.prisma.io">PrismaIO</a> e os motivos para usarmos ele em nossas aplicações</p>

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd carteirada-back-end`;
3. Rode `npm install` ;
4. Rode `npx prisma generate` para instalar os models do prisma no projeto
5. Rode `npm run dev` ou `npm run dev` para rodar a aplicação;
6. Acesse a URL `http://localhost:4003`;

## Como mostrar log da aplicação?

```ts
const prismaClient = new PrismaClient({
  log: ["error", "info", "query", "warn"],
});
```

## Como incluir informações em um select com relacionamento

```ts
const product = await prismaClient.product.findFirst({
  where: {
    id,
  },
  include: {
    ProductCategory: {
      // Seleciona o model
      include: {
        category: true, // Dentro do model seleciono o relacionamento que quero trazer completo.
      },
    },
  },
});
```

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito por Malucos
