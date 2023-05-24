import {Canal} from "./Canal.js";

export class Streamer {
  nickname: string;
  descripcion: string;
  socialMedia: string[];
  canales: Canal[];

  constructor(nickname: string, descripcion: string, socialMedia: string[]) {
    this.nickname = nickname;
    this.descripcion = descripcion;
    this.socialMedia = socialMedia;
    this.canales = [];
  }

  // Mostrar el listado de streamers
  static mostrarStreamers(streamers: Streamer[]): void {
    console.log("Listado de streamers:");
    for (const streamer of streamers) {
      console.log(`- ${streamer.nickname}`);
    }
  }

  // Ver el detalle de un streamer
  mostrarDetallesStreamer(): void {
    console.log("Detalles del streamer:");
    console.log(`Nickname: ${this.nickname}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Redes sociales: ${this.socialMedia.join(", ")}`);
    console.log("Canales asociados:");
    for (const canal of this.canales) {
      console.log(`- ${canal.nombre}`);
    }
  }

  // Agregar un streamer
  static agregarStreamer(streamers: Streamer[], nickname: string, descripcion: string, socialMedia: string[]): void {
    const nuevoStreamer = new Streamer(nickname, descripcion, socialMedia);
    streamers.push(nuevoStreamer);
  }

  // Agregar un canal a un streamer
  agregarCanal(canal: Canal): void {
    this.canales.push(canal);
  }
};
