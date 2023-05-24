export class Stream {
    constructor(categorias, streamer, canal) {
        this.categorias = categorias;
        this.streamer = streamer;
        this.canal = canal;
    }
    // Mostrar el listado de categorias de streams
    static mostrarStreams(streams) {
        console.log("Listado de streams:");
        for (const stream of streams) {
            const categorias = stream.categorias.map((categoria) => categoria.nombre).join(", ");
            console.log(`- Categorías: ${categorias}`);
        }
    }
    // Mostrar el detalle de un stream
    mostrarDetallesStream() {
        console.log("Detalles del stream:");
        console.log("Categorías:");
        for (const categoria of this.categorias) {
            console.log(`- ${categoria.nombre}`);
        }
        console.log("Streamers:");
        for (const streamer of this.streamer) {
            console.log(`- ${streamer.nickname}`);
        }
        console.log("Canales:");
        for (const canal of this.canal) {
            console.log(`- ${canal.nombre}`);
        }
    }
    // Agregar un stream
    static agregarStream(streams, categorias, streamer, canal) {
        const nuevoStream = new Stream(categorias, streamer, canal);
        streams.push(nuevoStream);
    }
}
;
