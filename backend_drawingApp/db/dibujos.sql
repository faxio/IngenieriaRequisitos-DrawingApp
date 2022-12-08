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

INSERT INTO Dibujo VALUES
    (1, "Primer dibujo"),
    (2, "Segundo dibujo"),
    (3, "Tercer dibujo"),
    (4, "Cuarto dibujo");

INSERT INTO Posiciones VALUES
    (1,0,"#ff0000"),
    (1,1,"#ff0000"),
    (1,2,"#ff0000"),
    (1,3,"#ff0000"),
    (1,4,"#ff0000"),
    (1,5,"#ff0000"),
    (2,0,"#ff0000");