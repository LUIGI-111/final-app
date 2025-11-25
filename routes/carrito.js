const express = require('express');
const router = express.Router();
const conn = require('../DB/connect');

// Agregar producto al carrito
router.post('/carrito', (req, res) => {
const { fk_user_id, fk_perfume_id, cantidad } = req.body;

const query = 'INSERT INTO carrito (fk_user_id, fk_perfume_id, cantidad) VALUES (?, ?, ?)';
conn.query(query, [fk_user_id, fk_perfume_id, cantidad || 1], (err, result) => {
    if (err) {
    console.error('Error al agregar al carrito:', err);
    return res.status(500).json({ success: false, message: 'Error al agregar al carrito' });
    }
    res.status(201).json({ success: true, message: 'Producto agregado al carrito' });
});
});

// Obtener carrito de un usuario
router.get('/carrito/:userId', (req, res) => {
const { userId } = req.params;

const query = `
    SELECT c.carrito_id, p.nombre_perfume, p.marca, p.precio, c.cantidad, p.imagenUrl
    FROM carrito c
    JOIN perfumes p ON c.fk_perfume_id = p.perfumes_id
    WHERE c.fk_user_id = ?`;

conn.query(query, [userId], (err, rows) => {
    if (err) {
    console.error('Error al obtener carrito:', err);
    return res.status(500).json({ success: false, message: 'Error al consultar carrito' });
    }
    res.status(200).json({ success: true, carrito: rows });
});
});

// Eliminar producto del carrito
router.delete('/carrito/:id', (req, res) => {
const { id } = req.params;

const query = 'DELETE FROM carrito WHERE carrito_id = ?';
conn.query(query, [id], (err, result) => {
    if (err) {
    console.error('Error al eliminar producto del carrito:', err);
    return res.status(500).json({ success: false, message: 'Error al eliminar producto' });
    }
    res.status(200).json({ success: true, message: 'Producto eliminado del carrito' });
});
});

module.exports = router;