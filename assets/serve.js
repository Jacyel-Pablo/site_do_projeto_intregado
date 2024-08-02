const express = require('express');
cont app = apress();
cont PORT = 3000;

app.use(express.json());

// Dados temporários armazenados em um array
let items = [];

//Rotas POST para adicionar um item
app.post('/items', (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(400).send("nome do item é necessário') 
  }                                
const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

//Rotas GET para obter todos os itens
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id ===parseInt(req.params.id));
  return res.status(404).send('Item não encontrador');
});

//Rota DELETE para remover um item por ID
app.delete('/item/:id', (req, res) => {
  items = items. filter(i =>i.id !== parseInt( req. params.id));
  res.status(204).send();
});
app.listen(PORT, () => {
  console.log('servidor rodando na porta ${PORT);
  }):
  
