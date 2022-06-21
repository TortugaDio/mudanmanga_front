import { SeguridadMenuItem } from "../../modelo/seguridad/SeguridadMenuItem";
import { ObjetoBoton } from "./ObjetoBoton";

 

export class ObjetoTitulo {
    constructor() {
        this.menuSeguridad = new SeguridadMenuItem();
        this.listaOtros = [];
    }

    listaOtros: any[];
    titulo: string;
    tipo: number;
    menuSeguridad: SeguridadMenuItem;
    componente: any;

    //Mantenimiento
    accion: string;
    puedeEditar: boolean;
    puedeEditarPk: boolean;
    codigoAccion: any;
    objetoBoton: ObjetoBoton[];
}

