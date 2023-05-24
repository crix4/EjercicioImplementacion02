import {Categoria} from "./Categoria.js";
import {Streamer} from "./Streamer.js";
import {Canal} from "./Canal.js";

export class Stream {
  categorias: Categoria[];
  streamer: Streamer[];
  canal: Canal[];

  constructor(categorias: Categoria[], streamer: Streamer[], canal: Canal[]) {
    this.categorias = categorias;
    this.streamer = streamer;
    this.canal = canal;
  }

  // Mostrar el listado de categorias de streams
  static mostrarStreams(streams: Stream[]): void {
    console.log("Listado de streams:");
    for (const stream of streams) {
      const categorias = stream.categorias.map((categoria) => categoria.nombre).join(", ");
      console.log(`- Categorías: ${categorias}`);
    }
  }

  // Mostrar el detalle de un stream
  mostrarDetallesStream(): void {
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
  static agregarStream(streams: Stream[], categorias: Categoria[], streamer: Streamer[], canal: Canal[]): void {
    const nuevoStream = new Stream(categorias, streamer, canal);
    streams.push(nuevoStream);
  }
};
