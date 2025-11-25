CREATE DATABASE perfumeria;

CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    activo boolean
);

CREATE TABLE perfumes (
    perfumes_id INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(100) NOT NULL,
    nombre_perfume VARCHAR(150) NOT NULL,
    description_perfume TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    imagenUrl VARCHAR(500),
    disponibilidad INT,
    categoria VARCHAR(100),
    tipo_perfume VARCHAR(50),
    volumen_cantidad INT
);

CREATE TABLE carrito (
    carrito_id INT PRIMARY KEY AUTO_INCREMENT,
    fk_user_id INT NOT NULL,
    fk_perfume_id INT NOT NULL,
    cantidad INT NOT NULL DEFAULT 1,
    FOREIGN KEY (fk_user_id) REFERENCES users(user_id) ,
    FOREIGN KEY (fk_perfume_id) REFERENCES perfumes(perfumes_id)
);

CREATE TABLE favoritos (
    favorito_id INT PRIMARY KEY AUTO_INCREMENT,
    fk_user_id INT NOT NULL,
    fk_perfume_id INT NOT NULL,
    FOREIGN KEY (fk_user_id) REFERENCES users(user_id),
    FOREIGN KEY (fk_perfume_id) REFERENCES perfumes(perfumes_id)
);