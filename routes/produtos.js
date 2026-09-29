const express = require('express');
const router = express.Router();

const { Produto, Categoria } = require('../models');

router.get('/', async (req, res) => {
  const produtos = await Produto.findAll({ include: Categoria });

  res.render('produtos/index', { produtos });
});

router.get('/novo', async (req, res) => {
  const categorias = await Categoria.findAll();

  res.render('produtos/novo', { categorias });
});

router.post('/', async (req, res) => {
  try {
    await Produto.create(req.body);
    res.redirect('/produtos');
  } catch (err) {
    res.status(400).send('Erro ao salvar: ' + err.message);
  }
});

router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  const categorias = await Categoria.findAll();

  res.render('produtos/editar', { produto, categorias });
});

router.post('/:id', async (req, res) => {
  await Produto.update(req.body, {
    where: { id: req.params.id }
  });

  res.redirect('/produtos');
});

router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: { id: req.params.id }
  });

  res.redirect('/produtos');
});

module.exports = router;