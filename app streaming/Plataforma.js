export class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
    }
    // Getter y Setter para acceder a los atributos privados
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getLogo() {
        return this.logo;
    }
    setLogo(logo) {
        this.logo = logo;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getEmpresa() {
        return this.empresa;
    }
    setEmpresa(empresa) {
        this.empresa = empresa;
    }
}
export default Plataforma;
