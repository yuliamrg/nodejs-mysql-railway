-- Active: 1666560126389@@127.0.0.1@3306@usersdb
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
) DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

show tables;

SELECT * FROM users;

TRUNCATE TABLE users;