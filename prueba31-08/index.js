import express from 'express';

const app = express();

app.use(express.json());

app.post('/gomez', (req, res) =>){
  console.log(req.body);
});

app.lisen(3000);
