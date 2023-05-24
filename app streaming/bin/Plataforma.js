export class Plataforma {
    constructor(nombre, logo, descripcion, sponsor) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.sponsor = sponsor;
        this.canales = [];
    }
    // Mostrar el listado de plataformas
    static mostrarPlataformas(plataformas) {
        console.log("Listado de plataformas:");
        for (const plataforma of plataformas) {
            console.log(`- ${plataforma.nombre}`);
        }
    }
    // Mostrar el detalle de una plataforma
    mostrarDetallesPlataforma() {
        console.log("Detalles de la plataforma:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Logo: ${this.logo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Patrocinador: ${this.sponsor}`);
    }
    // Agregar una plataforma
    static agregarPlataforma(plataformas, nombre, logo, descripcion, sponsor) {
        const nuevaPlataforma = new Plataforma(nombre, logo, descripcion, sponsor);
        plataformas.push(nuevaPlataforma);
    }
}
;
