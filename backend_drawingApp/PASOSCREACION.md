### Requisitos
* MariaDB/MySql
* NodeJs
* Git


### Pasos utilizados para la inicialización
* `npm init --yes` Inicializa con datos por defecto
* `npm install express --save` Instalar libreria express
* `npm i nodemon -D` Instalar nodemon como libreria de desarrollo
* npm install mysql2

### En la raíz de la carpeta crear
* `index.js`


### Habilitar la importación de modulos 
* Abrir el archivo `package.json`
* Posicionarse bajo el main 
* Escribir: `"type":"module",`


### Habilitar nodemon por defecto
* En el apartado scripts cambiamos `test` por `dev`
* Luego de los dos puntos colocamos: `nodemon index.js`
* Para ejecutar: `npm run dev`


### Creación de rutas

* Creamos las rutas
* Abrir thunderClient
* Visualizamos rutas

### MySql

* Tener instalado MySql/mariaDB
* Utilizar MySql/mariaDB: `mysql -u root`
* Creamos carpeta `db`
* Creamos archivo <nombre>.sql
* En consola escribimos `mysql -u root -p < dibujos.sql`
