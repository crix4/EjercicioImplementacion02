export class Stream {
    constructor(categories) {
        this.categorias = categories;
    }
    // Mostrar el listado de streams
    static mostrarStreams(streams) {
        console.log("Listado de streams:");
        for (const stream of streams) {
            const categories = stream.categorias.map((categoria) => categoria.nombre).join(", ");
            console.log(`- Categorías: ${categories}`);
        }
    }
    // Mostrar el detalle de un stream
    mostrarDetallesStream() {
        console.log("Detalles del stream:");
        console.log("Categorías:");
        for (const categoria of this.categorias) {
            console.log(`- ${categoria.nombre}`);
        }
    }
    // Agregar un stream
    static agregarStream(streams, categorias) {
        const nuevoStream = new Stream(categorias);
        streams.push(nuevoStream);
    }
}
;
