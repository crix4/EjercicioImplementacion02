export class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
    // Getter y Setter para acceder a los atributos privados
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getImagen() {
        return this.imagen;
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
}
export default Categoria;
