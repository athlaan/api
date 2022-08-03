//si está la linea type: module; podes usar esta forma
// imports

//console.log ('Hola mundo');
//let a = 12;
//console.log(a + 12);

import express from 'express';
//const express = require ('express');

//config vars
const PORT = process.env.PORT || 3000;
// base de datos de mentira
const notes = [
    {
      id: 1,
      text: 'Lavar la ropa',
      done: false
    },
    {
      id: 2,
      text: 'Estudiar node',
      done: false
    }
    {
      id: 3,
      text: 'Hacer las compras',
      done:false
    }
]
const app = express();
app.use(express.static('public'));
app.use(express.json());

// en una API que devuelve JSON
// la que se dice una API REST
// GET para leer datos
// POST para crear datos
// PUT para modificar
// DELETE para borrar







//app.get('/antezana', (req,res) => {
//  res.send('ANTEZANA');
//});
app.get('/notes', (req,res) => {
  res.status(200).json(notes);
})
app.get('/notes/:id', (req, res) => {
  //res.send('Acá te pasa la nota con id' + req.params.id);
  let id = +req.params.id;
  let result = notes.filter(note => note.id === id);
  res.json(result);
});
app.post('/notes', (req,res) => {
  //let newNote = {
  //id: 100,
  //text: 'Jugar a la play';
    //done: false
  //};
 //(res.send('Acá creas una nota');
  let { id , text, done} = req.budy
  console.log(req.budy);
  let newNote = {id, text, done };
  notes.push(newNote);
  res.status(201).json(newNote);
});

app.listen(PORT, () => {
  console.log(`Server escuchando en puerto ${PORT}`)
});
