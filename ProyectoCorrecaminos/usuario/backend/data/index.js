const express = require('express');
const cors = requiere('cors');
const app = express();
const port = 3000;

const usuarios = require('./data/usuario.json');

app.use(express.json());
app.use(cors());

// Endpoint para obtener todos los usuarios

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
  });

  // Endpoint para el inicio de sesión
app.post('/login', (req, res) => {
    const { usuario, contrasena } = req.body;
    console.log(req.body);
    const usuarioEncontrado = usuario.find(user => user.nombre === usuario && user.contrasena === contrasena);
    if (usuarioEncontrado) {
      let u = {...usuarioEncontrado};
      delete u.contrasena;
      delete u.conversaciones;
      res.json({ exito: true, mensaje: 'Inicio de sesión exitoso', usuario: u });
    } else {
      res.status(401).json({ exito: false, mensaje: 'Credenciales inválidas' });
    }
  });

  // Endpoint para obtener un usuario específico
app.get('/usuarios/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    console.log(userId);
    const usuario = usuarios.find(user => user.id === userId);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  });
  
  // Endpoint para crear un nuevo usuario
  app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body;
    // Asigna un ID único al usuario
    nuevoUsuario.id = usuarios.length + 1;
    usuarios.push(nuevoUsuario);
    res.json(nuevoUsuario);
  });