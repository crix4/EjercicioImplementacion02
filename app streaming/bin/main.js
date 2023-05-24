import { Plataforma } from "./Plataforma.js";
import { Canal } from "./Canal.js";
import { Streamer } from "./Streamer.js";
import { Stream } from "./Stream.js";
import { Categoria } from "./Categoria.js";
// Crear instancias de las clases
const plataformas = [];
const canales = [];
const streamers = [];
const streams = [];
const categorias = [];
// Agregar categorías
const categoria1 = new Categoria("Juegos", "Categoría de juegos", "juegos.png");
const categoria2 = new Categoria("Música", "Categoría de música", "musica.png");
// Agregar plataformas
Plataforma.agregarPlataforma(plataformas, "Twitch", "twitch.png", "Plataforma de streaming de videojuegos", "Amazon");
Plataforma.agregarPlataforma(plataformas, "YouTube Live", "youtube.png", "Plataforma de streaming de videos en general", "Google");
// Agregar streamers
Streamer.agregarStreamer(streamers, "Streamer1", "Descripción del Streamer1", ["Twitter", "Instagram"]);
Streamer.agregarStreamer(streamers, "Streamer2", "Descripción del Streamer2", ["Facebook", "TikTok"]);
// Agregar canales
Canal.agregarCanal(canales, "Canal1", "banner1.png", streamers[0], "Descripción del Canal1");
Canal.agregarCanal(canales, "Canal2", "banner2.png", streamers[1], "Descripción del Canal2");
// Agregar un stream 
Stream.agregarStream(streams, [categoria1], [streamers[0]], [canales[0]]);
Stream.agregarStream(streams, [categoria2], [streamers[1]], [canales[1]]);
// Asociar canales a streamers
streamers[0].agregarCanal(canales[0]);
streamers[1].agregarCanal(canales[1]);
// Mostrar listados y detalles
Plataforma.mostrarPlataformas(plataformas);
plataformas[0].mostrarDetallesPlataforma();
Canal.mostrarCanales(canales);
canales[0].mostrarDetallesCanal();
Streamer.mostrarStreamers(streamers);
streamers[1].mostrarDetallesStreamer();
Stream.mostrarStreams(streams);
streams[0].mostrarDetallesStream();
