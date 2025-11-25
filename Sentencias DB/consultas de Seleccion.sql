SELECT u.email, p.nombre_perfume, c.cantidad, p.precio
FROM carrito c
INNER JOIN users u ON c.fk_user_id = u.user_id
INNER JOIN perfumes p ON c.fk_perfume_id = p.perfumes_id;