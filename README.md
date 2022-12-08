### Instrucciones generales

* Agregar la BD que se encuentra en backend_drawingApp/db/dibujos.sql
* Abrir dos terminales
### **Primera terminal**: 
* `cd drawingApp`
* `npm i`
* `npm run dev`

### **Segunda terminal**
* `cd backend_drawingApp`
* `npm i`
* `npm run dev`


### **¿Cómo agregar la BD?**

* Posicionarse en la carpeta `backend_drawingApp/db/dibujos.sql`
* Abrir terminal y escribir: `mysql -u root -p < dibujos.sql`
* En caso de tener una configuración diferente en mysql editar el archivo `backend_drawingApp/src/db.js`

### **Error ejecución backend?**

* Ejecutar con `node src/index.js`
