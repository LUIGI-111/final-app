INSERT INTO perfumes (
    marca,
    nombre_perfume,
    description_perfume,
    precio,
    imagenUrl,
    disponibilidad,
    categoria,
    tipo_perfume,
    volumen_cantidad) 
    VALUES (
    'Chanel',
    'No. 5 Eau de Parfum',
    'Una fragancia clásica con notas florales y aldehídicas que evocan elegancia atemporal.',
    420.00,
    '/img/perfume1.jpg',
    15,
    'Femenino',
    'Eau de Parfum',
    100
);

INSERT INTO users (email, password, activo) VALUES
('cliente1@perfumes.com', 'password123', TRUE),
('cliente2@perfumes.com', 'fragancia456', TRUE),
('cliente3@perfumes.com', 'elegance789', FALSE);

INSERT INTO favoritos (fk_user_id, fk_perfume_id) VALUES
(1, 1);


INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Victoria\'s Secret', 'Pure Seduction Loción', 'Loción perfumada con notas de ciruela y fresia', 82.00, '../img/vs_pure_seduction.jpg', 15, 'Fragancias', 'Loción', 250);

INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Bath & Body Works', 'A Thousand Wishes', 'Loción con fragancia dulce y floral', 75.00, '../img/bbw_thousand_wishes.jpg', 20, 'Fragancias', 'Loción', 236);


INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Nivea Men', 'Loción Hidratante', 'Loción ligera para piel masculina, con aloe vera', 48.00, '../img/nivea_men.jpg', 25, 'Cuidado personal', 'Loción', 400);

INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Bulldog', 'Loción After Shave', 'Loción calmante con ingredientes naturales para después del afeitado', 60.00, '../img/bulldog_aftershave.jpg', 12, 'Cuidado personal', 'Loción', 200);

-- Perfumes femeninos
INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Chanel', 'Coco Mademoiselle', 'Perfume elegante con notas cítricas y florales', 420.00, '../img/chanel_coco.jpg', 8, 'Fragancias', 'Perfume', 100);

INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Dior', 'J\'adore', 'Perfume icónico con notas de jazmín y rosa', 390.00, '../img/dior_jadore.jpg', 10, 'Fragancias', 'Perfume', 100);

-- Perfumes masculinos
INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Hugo Boss', 'Boss Bottled', 'Perfume masculino con notas de manzana y especias cálidas', 350.00, '../img/boss_bottled.jpg', 12, 'Fragancias', 'Perfume', 100);

INSERT INTO perfumes 
(marca, nombre_perfume, description_perfume, precio, imagenUrl, disponibilidad, categoria, tipo_perfume, volumen_cantidad)
VALUES
('Armani', 'Acqua di Gio', 'Perfume fresco con notas marinas y cítricas', 370.00, '../img/armani_acqua.jpg', 15, 'Fragancias', 'Perfume', 100);