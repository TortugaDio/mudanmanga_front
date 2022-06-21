export class DominioTransaccion {

    constructor() {
        this.auxFlgNuevo = 'N';
        this.auxFlgEditar = 'N';
        this.auxFlgEliminar = 'N';
    }

    transaccionEstado: string;
    transaccionListaMensajes: any[];
    auxFlgPreparado: string;
    auxFlgValidado: string;

    auxAccion: string;
    auxFlgNuevo: string;
    auxFlgEditar: string;
    auxFlgEliminar: string;
}