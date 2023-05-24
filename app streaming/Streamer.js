export class Streamer {
    constructor(nickname, descripcion) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = [];
    }
    // Getter y Setter para acceder a los atributos privados
    getNickname() {
        return this.nickname;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getRedesSociales() {
        return this.redesSociales;
    }
    agregarRedSocial(redSocial) {
        this.redesSociales.push(redSocial);
    }
}
export default Streamer;
