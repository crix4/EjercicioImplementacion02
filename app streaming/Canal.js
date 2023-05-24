export class Canal {
    constructor(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    // Getter y Setter para acceder a los atributos privados
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getBanner() {
        return this.banner;
    }
    setBanner(banner) {
        this.banner = banner;
    }
    getStreamer() {
        return this.streamer;
    }
    setStreamer(streamer) {
        this.streamer = streamer;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
}
export default Canal;
