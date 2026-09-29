const express = require('express');
const router = express.Router();

const { Produto } = require('../models');

router.get('/', async (req, res) => {
  const produtos = await Produto.findAll();

  res.render('produtos/index', {
    produtos
  });
});

router.get('/novo', (req, res) => {
  res.render('produtos/novo');
});

router.post('/', async (req, res) => {
  try {
    console.log('BODY:', req.body);
    await Produto.create(req.body);
    res.redirect('/produtos');
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Erro ao salvar: ' + err.message);
  }
});

router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);

  res.render('produtos/editar', {
    produto
  });
});

router.post('/:id', async (req, res) => {
  await Produto.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: {
      id: req.params.id
    }
  });

  res.redirect('/produtos');
});

module.exports = router;