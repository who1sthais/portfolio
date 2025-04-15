const express = require('express'); 
const app = express();
const path = require('path');

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Arquivos estáticos (CSS, imagens, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Dados dos projetos (você pode extrair isso para outro arquivo depois, se quiser)
const projects = [
  {
    title: 'IntegraIF',
    description: 'Sistema web para integração de serviços e informações internas do IFB.',
    tech: ['Node.js', 'Express', 'EJS'],
    link: '/projetos/integraif',
    image: 'integraif.pnj'
  },
  {
    title: 'Clínica',
    description: 'Sistema de gerenciamento para clínicas, feito em sala de aula com intuito de aprender mais sobre CRUD (Create, Read, Update, Delete).',
    tech: ['Node.js', 'Express', 'EJS', 'MySQL'],
    link: '/projetos/clinica',
    image: 'clinica.jpg'
  }
];

// Rotas principais
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', { projects }); // <- agora a variável projects é passada aqui também
});

app.get('/projects', (req, res) => {
  res.render('projects', { projects });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Rotas individuais dos projetos
app.get('/projetos/integraif', (req, res) => {
  res.render('projetos/integraif');
});

app.get('/projetos/clinica', (req, res) => {
  res.render('projetos/clinica');
});

// Servidor
app.listen(3000, () => {
  console.log('Portfólio rodando em http://localhost:3000');
});
