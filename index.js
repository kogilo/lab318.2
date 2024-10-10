const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
  });
  
  app.get('/about', (req, res) => {
    res.render('about');
  });

app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body.data);
  res.send('Form submitted successfully!');
});
