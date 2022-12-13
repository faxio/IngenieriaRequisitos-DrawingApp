export class Dibujo {
    Dibujo(nombre){
        this.nombre = nombre;
        this.posiciones = []
    }
    generatePos(){
        for (let i=0; i<400; i++){
            this.posiciones.push(new Posiciones(i,"#FF0000"))
        }
    }
    getNombre(){
        return this.nombre
    }

} 

class Posiciones {
    Posiciones(posicion, color){
        this.posicion = posicion;
        this.color = color;
    }
}