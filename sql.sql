create database flower_shop;
use flower_shop;
CREATE TABLE flowers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price FLOAT(10,2),
    color VARCHAR(100)
);
DESC flowers;
CREATE TABLE customers(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(100)
);
DESC customers;
CREATE TABLE orders(
    id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    flower_id INT,
    quantity INT
);
DESC orders;
SHOW TABLES;