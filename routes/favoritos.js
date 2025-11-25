const express = require('express');
const router = express.Router();
const conn = require('../DB/connect');

// Agregar a favoritos
router.post('/favoritos', (req, res) => {
const { fk_user_id, fk_perfume_id } = req.body;

const query = 'INSERT INTO favoritos (fk_user_id, fk_perfume_id) VALUES (?, ?)';
conn.query(query, [fk_user_id, fk_perfume_id], (err, result) => {
    if (err) {
    console.error('Error al agregar a favoritos:', err);
    return res.status(500).json({ success: false, message: 'Error al agregar a favoritos' });
    }
    res.status(201).json({ success: true, message: 'Perfume agregado a favoritos' });
});
});

// Obtener favoritos de un usuario
router.get('/favoritos/:userId', (req, res) => {
const { userId } = req.params;

const query = `
    SELECT f.favorito_id, p.nombre_perfume, p.marca, p.precio, p.imagenUrl
    FROM favoritos f
    JOIN perfumes p ON f.fk_perfume_id = p.perfumes_id
    WHERE f.fk_user_id = ?`;

conn.query(query, [userId], (err, rows) => {
    if (err) {
    console.error('Error al obtener favoritos:', err);
    return res.status(500).json({ success: false, message: 'Error al consultar favoritos' });
    }
    res.status(200).json({ success: true, favoritos: rows });
});
});

// Eliminar favorito
router.delete('/favoritos/:id', (req, res) => {
const { id } = req.params;

const query = 'DELETE FROM favoritos WHERE favorito_id = ?';
conn.query(query, [id], (err, result) => {
    if (err) {
    console.error('Error al eliminar favorito:', err);
    return res.status(500).json({ success: false, message: 'Error al eliminar favorito' });
    }
    res.status(200).json({ success: true, message: 'Perfume eliminado de favoritos' });
});
});

module.exports = router;