const express = require('express');
const router = express.Router();
const conn = require('../DB/connect');

// Obtener todos los perfumes
router.get('/perfumes', (req, res) => {
    const query = 'SELECT * FROM perfumes';

    conn.query(query, (err, rows) => {
        if (err) {
            console.error('Error al obtener perfumes:', err);
            return res.status(500).json({ success: false, message: 'Error al consultar perfumes' });
        }

        res.status(200).json({ success: true, perfumes: rows });
    });
});

// Obtener un perfume por ID
router.get('/perfumes/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM perfumes WHERE perfumes_id = ?';

    conn.query(query, [id], (err, rows) => {
        if (err) {
            console.error('Error al obtener perfume:', err);
            return res.status(500).json({ success: false, message: 'Error al consultar perfume' });
        }

        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Perfume no encontrado' });
        }

        res.status(200).json({ success: true, perfume: rows[0] });
    });
});

module.exports = router;
