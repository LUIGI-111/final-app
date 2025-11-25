const express = require('express');
const router = express.Router();
const conn = require('../DB/connect');

// Registrar nuevo usuario
router.post('/user/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Faltan datos obligatorios (email y contraseña)'
    });
  }

  // Verificar si el correo ya existe
  conn.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
    if (err) {
      console.error('Error al verificar usuario:', err);
      return res.status(500).json({ success: false, message: 'Error interno' });
    }

    if (rows.length > 0) {
      return res.status(409).json({ success: false, message: 'El correo ya está registrado' });
    }

    // Insertar nuevo usuario
    const query = 'INSERT INTO users (email, password, activo) VALUES (?, ?, ?)';
    conn.query(query, [email, password, true], (err, result) => {
      if (err) {
        console.error('Error al registrar usuario:', err);
        return res.status(502).json({
          success: false,
          message: 'Error al guardar el usuario en la base de datos'
        });
      }

      res.status(201).json({
        success: true,
        message: 'Usuario registrado correctamente',
        user_id: result.insertId
      });
    });
  });
});

// Login de usuario
router.post('/user/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Faltan datos obligatorios (email o contraseña)'
    });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ? AND activo = true';
  conn.query(query, [email, password], (err, rows) => {
    if (err) {
      console.error('Error al iniciar sesión:', err);
      return res.status(500).json({
        success: false,
        message: 'Error interno del servidor'
      });
    }

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Email o contraseña incorrectos'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Inicio de sesión exitoso',
      user: rows[0]
    });
  });
});

module.exports = router;