const express = require('express');
const router = express.Router();

const { Categoria } = require('../models');

router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll();

  res.render('categorias/index', {
    categorias
  });
});

router.post('/', async (req, res) => {
  try {
    await Categoria.create(req.body);
    res.redirect('/categorias');
  } catch (err) {
    res.status(400).send('Erro ao salvar: ' + err.message);
  }
});

module.exports = router;