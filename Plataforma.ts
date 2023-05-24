import {Canal} from "./Canal.js";

export class Plataforma {
  nombre: string;
  logo: string;
  descripcion: string;
  sponsor: string;
  canales: Canal[];

  constructor(nombre: string, logo: string, descripcion: string, sponsor: string) {
    this.nombre = nombre;
    this.logo = logo;
    this.descripcion = descripcion;
    this.sponsor = sponsor;
    this.canales = [];
  }

  // Mostrar el listado de plataformas
  static mostrarPlataformas(plataformas: Plataforma[]): void {
    console.log("Listado de plataformas:");
    for (const plataforma of plataformas) {
      console.log(`- ${plataforma.nombre}`);
    }
  }

  // Mostrar el detalle de una plataforma
  mostrarDetallesPlataforma(): void {
    console.log("Detalles de la plataforma:");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Logo: ${this.logo}`);
    console.log(`Descripción: ${this.descripcion}`);
    console.log(`Patrocinador: ${this.sponsor}`);
  }

  // Agregar una plataforma
  static agregarPlataforma(plataformas: Plataforma[], nombre: string, logo: string, descripcion: string, sponsor: string): void {
    const nuevaPlataforma = new Plataforma(nombre, logo, descripcion, sponsor);
    plataformas.push(nuevaPlataforma);
  }
};