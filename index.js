const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use(morgan('dev'));

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (for images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/submit', (req, res) => {
  console.log(req.body.data);
  res.send('Form submitted successfully!');
});

app.get('/user/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

app.get('/download', (req, res) => {
  const file = path.join(__dirname, 'public', 'images', 'image.jpg');
  res.download(file, 'downloaded-image.jpg');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
