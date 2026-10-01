# 🛒 Cadastro de Produtos — MVC

## 👩‍💻 Integrante

Stefany — RM 20240504

## ▶️ Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
npm start
```

3. Acesse no navegador: http://localhost:3000/produtos


## ✨ Funcionalidades

- 📦 Cadastro de produtos
- 📋 Listagem de produtos
- ✏️ Edição de produtos
- 🗑️ Exclusão de produtos
- 🏷️ Cadastro de categorias
- 🔎 Produtos por categoria

## 🎯 Desafios

### 🏷️ Desafio 1 — Categorias

Criei o Model `Categoria` (campo `nome`) em `models/index.js` e relacionei
com `Produto` usando `Categoria.hasMany(Produto)` e `Produto.belongsTo(Categoria)`,
com a chave estrangeira `categoriaId` na tabela `Produtos`. Usei `as: 'categoria'`
na associação para controlar o nome da propriedade na consulta.
As categorias são cadastradas em `/categorias`. Os formulários de novo produto
e de edição têm um `<select name="categoriaId">` com as categorias, e a listagem
usa `include` para mostrar o nome da categoria de cada produto.

### 🔎 Desafio 2 — Produtos por categoria

Criei a rota `GET /produtos/categoria/:id`. Usei GET porque ela só consulta
dados e não altera nada. A categoria é identificada pelo `id` (`req.params.id`).
A rota busca a categoria com `findByPk` (retorna 404 se não existir) e os
produtos com `Produto.findAll({ where: { categoriaId } })`, que filtra pela
chave estrangeira. O resultado é exibido na view `views/produtos/categoria.ejs`.
Na página `/categorias`, o nome de cada categoria é um link para essa rota.
