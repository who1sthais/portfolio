const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  const projects = [
    {
      title: 'Mangaba Cerrado',
      description: 'Plataforma com rotas específicas para professores e alunos, usando Node.js, Express e EJS.',
      tech: ['Node.js', 'Express', 'EJS'],
      link: '#',
      image: 'mangaba.jpg'
    },
    {
      title: 'ProtejaElas',
      description: 'Aplicativo desenvolvido para auxiliar no combate à violência contra a mulher.',
      tech: ['Shiny', 'R'],
      link: '#',
      image: 'protejaelas.jpg'
    },
    {
      title: 'HubIFB',
      description: 'Projeto em parceria com uma estudante de Gestão Pública, voltado para o integraIfHUB',
      tech: ['Node.js', 'Express', 'EJS'],
      link: '#',
      image: 'ra.jpg'
    }
  ];
  res.render('projects', { projects });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => {
  console.log('Portfólio rodando em http://localhost:3000');
});
