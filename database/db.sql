CREATE DATABASE calculadora;

Use calculadora;

CREATE TABLE historial(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;
    calculo VARCHAR(100) NOT NULL;
    resultado VARCHAR(100) NOT NULL;
)