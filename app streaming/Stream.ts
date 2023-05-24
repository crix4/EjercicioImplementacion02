import {Categoria} from "./Categoria.js";

export class Stream {
  categorias: Categoria[];

  constructor(categories: Categoria[]) {
    this.categorias = categories;
  }

  // Mostrar el listado de streams
  static mostrarStreams(streams: Stream[]): void {
    console.log("Listado de streams:");
    for (const stream of streams) {
      const categories = stream.categorias.map((categoria) => categoria.nombre).join(", ");
      console.log(`- Categorías: ${categories}`);
    }
  }

  // Mostrar el detalle de un stream
  mostrarDetallesStream(): void {
    console.log("Detalles del stream:");
    console.log("Categorías:");
    for (const categoria of this.categorias) {
      console.log(`- ${categoria.nombre}`);
    }
  }

  // Agregar un stream
  static agregarStream(streams: Stream[], categorias: Categoria[]): void {
    const nuevoStream = new Stream(categorias);
    streams.push(nuevoStream);
  }
};
