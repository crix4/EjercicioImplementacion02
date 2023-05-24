class Aplicacion {
    constructor() {
        this.plataformas = [];
    }
    mostrarListadoPlataformas() {
        // Mostrar el listado de plataformas
        console.log("Listado de Plataformas:");
        this.plataformas.forEach((plataforma) => {
            console.log(`- ${plataforma.getNombre()}`);
        });
    }
    mostrarDetallePlataforma(nombrePlataforma) {
        // Mostrar el detalle de una plataforma
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            console.log("Detalle de la Plataforma:");
            console.log(`Nombre: ${plataforma.getNombre()}`);
            console.log(`Logo: ${plataforma.getLogo()}`);
            console.log(`Descripción: ${plataforma.getDescripcion()}`);
            console.log(`Empresa: ${plataforma.getEmpresa()}`);
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}`);
        }
    }
    mostrarListadoCanales() {
        // Mostrar el listado de canales
        console.log("Listado de Canales:");
        this.plataformas.forEach((plataforma) => {
            plataforma.getCanales().forEach((canal) => {
                console.log(`- ${canal.getNombre()} (${plataforma.getNombre()})`);
            });
        });
    }
    mostrarDetalleCanal(nombreCanal) {
        // Mostrar el detalle de un canal
        let canalEncontrado = null;
        this.plataformas.forEach((plataforma) => {
            const canal = plataforma.buscarCanal(nombreCanal);
            if (canal) {
                canalEncontrado = canal;
            }
        });
        if (canalEncontrado) {
            console.log("Detalle del Canal:");
            console.log(`Nombre: ${canalEncontrado.getNombre()}`);
            console.log(`Banner: ${canalEncontrado.getBanner()}`);
            console.log(`Streamer: ${canalEncontrado.getStreamer()}`);
            console.log(`Descripción: ${canalEncontrado.getDescripcion()}`);
        }
        else {
            console.log(`No se encontró el canal ${nombreCanal}`);
        }
    }
    mostrarListadoStreamers() {
        // Mostrar el listado de streamers
        console.log("Listado de Streamers:");
        this.plataformas.forEach((plataforma) => {
            plataforma.getCanales().forEach((canal) => {
                canal.getStreamers().forEach((streamer) => {
                    console.log(`- ${streamer.getNickname()} (${canal.getNombre()} - ${plataforma.getNombre()})`);
                });
            });
        });
    }
    mostrarDetalleStreamer(nicknameStreamer) {
        // Ver el detalle de un streamer
        let streamerEncontrado = null;
        this.plataformas.forEach((plataforma) => {
            plataforma.getCanales().forEach((canal) => {
                const streamer = canal.buscarStreamer(nicknameStreamer);
                if (streamer) {
                    streamerEncontrado = streamer;
                }
            });
        });
        if (streamerEncontrado) {
            console.log("Detalle del Streamer:");
            console.log(`Nickname: ${streamerEncontrado.getNickname()}`);
            console.log(`Descripción: ${streamerEncontrado.getDescripcion()}`);
            console.log(`Redes Sociales: ${streamerEncontrado.getRedesSociales().join(", ")}`);
        }
        else {
            console.log(`No se encontró el streamer ${nicknameStreamer}`);
        }
    }
    mostrarListadoStreams() {
        // Mostrar el listado de streams
        console.log("Listado de Streams:");
        this.plataformas.forEach((plataforma) => {
            plataforma.getCanales().forEach((canal) => {
                canal.getStreams().forEach((stream) => {
                    console.log(`- ${stream.getNombre()} (${canal.getNombre()} - ${plataforma.getNombre()})`);
                });
            });
        });
    }
    mostrarDetalleStream(nombreStream) {
        // Mostrar el detalle de un stream
        let streamEncontrado = null;
        this.plataformas.forEach((plataforma) => {
            plataforma.getCanales().forEach((canal) => {
                const stream = canal.buscarStream(nombreStream);
                if (stream) {
                    streamEncontrado = stream;
                }
            });
        });
        if (streamEncontrado) {
            console.log("Detalle del Stream:");
            console.log(`Nombre: ${streamEncontrado.getNombre()}`);
            console.log(`Categorías: ${streamEncontrado.getCategorias().join(", ")}`);
        }
        else {
            console.log(`No se encontró el stream ${nombreStream}`);
        }
    }
    agregarPlataforma(plataforma) {
        // Agregar una plataforma
        this.plataformas.push(plataforma);
    }
    agregarCanal(nombrePlataforma, canal) {
        // Agregar un canal a una plataforma
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            plataforma.agregarCanal(canal);
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}`);
        }
    }
    agregarStreamer(nombrePlataforma, nombreCanal, streamer) {
        // Agregar un streamer a un canal
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            const canal = plataforma.buscarCanal(nombreCanal);
            if (canal) {
                canal.agregarStreamer(streamer);
            }
            else {
                console.log(`No se encontró el canal ${nombreCanal}`);
            }
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}`);
        }
    }
    agregarStream(nombrePlataforma, nombreCanal, stream) {
        // Agregar un stream a un canal
        const plataforma = this.buscarPlataforma(nombrePlataforma);
        if (plataforma) {
            const canal = plataforma.buscarCanal(nombreCanal);
            if (canal) {
                canal.agregarStream(stream);
            }
            else {
                console.log(`No se encontró el canal ${nombreCanal}`);
            }
        }
        else {
            console.log(`No se encontró la plataforma ${nombrePlataforma}`);
        }
    }
    buscarPlataforma(nombrePlataforma) {
        return this.plataformas.find((plataforma) => plataforma.getNombre() === nombrePlataforma);
    }
}
;
export {};
