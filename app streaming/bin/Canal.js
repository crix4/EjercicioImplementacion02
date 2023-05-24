export class Canal {
    constructor(nombre, banner, streamer, descripcion) {
        this.nombre = nombre;
        this.banner = banner;
        this.streamer = streamer;
        this.descripcion = descripcion;
    }
    // Mostrar el listado de canales
    static mostrarCanales(canales) {
        console.log("Listado de canales:");
        for (const canal of canales) {
            console.log(`- ${canal.nombre}`);
        }
    }
    // Mostrar el detalle de un canal
    mostrarDetallesCanal() {
        console.log("Detalles del canal:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log("Streamer:");
        console.log(`- Nickname: ${this.streamer.nickname}`);
        console.log(`- Descripción: ${this.streamer.descripcion}`);
        console.log(`- Redes sociales: ${this.streamer.socialMedia.join(", ")}`);
    }
    // Agregar un canal
    static agregarCanal(canales, nombre, banner, streamer, descripcion) {
        const nuevoCanal = new Canal(nombre, banner, streamer, descripcion);
        canales.push(nuevoCanal);
    }
}
;
