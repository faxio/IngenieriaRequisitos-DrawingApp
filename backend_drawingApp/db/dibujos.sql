CREATE DATABASE IF NOT EXISTS dibujosDB;

use dibujosDB

CREATE TABLE `Dibujo` (
  `ID` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255)
);

CREATE TABLE `Posiciones` (
  `id` int,
  `pos` int,
  `color` varchar(255)
);

ALTER TABLE `Posiciones` ADD FOREIGN KEY (`id`) REFERENCES `Dibujo` (`ID`);

