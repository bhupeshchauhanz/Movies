const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

let movies = [
  { id: 1, title: 'Inception', rating: 9, image: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
  { id: 2, title: 'Interstellar', rating: 8.5, image: 'https://image.tmdb.org/t/p/w500/gEU2QniL6E8AHtMY4kOuxZnOleo.jpg' },
  { id: 3, title: 'Dangal', rating: 8.4, image: 'https://image.tmdb.org/t/p/w500/wHqGb8J6d84e05Atj6r62Qf1tq.jpg' }
];

app.get('/movies/search', (req, res) => {
  const q = (req.query.title || '').toLowerCase();
  res.json(movies.filter(m => m.title.toLowerCase().includes(q)));
});

app.listen(3000, () => console.log('Movies project running on http://localhost:3000'));
