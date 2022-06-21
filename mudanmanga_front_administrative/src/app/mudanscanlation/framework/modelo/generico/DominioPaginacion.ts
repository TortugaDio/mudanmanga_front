export class DominioPaginacion {
    constructor(){
        this.paginacionRegistroInicio = 0;
        this.filtroSessionGuardado = true;
    }

    paginacionRegistroInicio: number;
    paginacionListaResultado: any[];
    paginacionRegistrosEncontrados: number;
    paginacionRegistrosPorPagina: number;
    paginacionOrdenDireccion: string;
    paginacionOrdenAtributo: string;
    filtroSessionGuardado:boolean;
}