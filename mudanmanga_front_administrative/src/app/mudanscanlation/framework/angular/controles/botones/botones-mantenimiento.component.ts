
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';

import { AppConfig } from 'src/environments/appconfig';

import { MessageService } from 'primeng/api';
import { PrincipalBaseComponent } from '../../component/PrincipalBaseComponent';
import { ObjetoTitulo } from '../../dominio/ObjetoTitulo';
import { NoAuthorizationInterceptor } from '../../interceptor/NoAuthorizationInterceptor';
import { ServicioComunService } from 'src/app/mudanscanlation/modulos/framework-comun/servicioComun.service';
import { ObjetoBoton } from '../../dominio/ObjetoBoton';
import { ConstanteAngular } from '../../ConstanteAngular';


@Component({
    selector: 'app-botones-mantenimiento',
    templateUrl: 'botones-mantenimiento.component.html'
})

export class BotonesMantenimientoComponent extends PrincipalBaseComponent implements OnInit {

    @Input() objTitulo = new ObjetoTitulo();
    @Input() tipo = '';
    @Input() listabotones: any[] = [];

    constructor(
        private cdref: ChangeDetectorRef,
        private config: AppConfig,
        noAuthorizationInterceptor: NoAuthorizationInterceptor,
        messageService: MessageService,
        servicioComun: ServicioComunService,
    ) { super(noAuthorizationInterceptor, messageService, servicioComun); }


    ngOnInit() {
        console.log(this.objTitulo.codigoAccion)

    }

    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }

    nuevo() {
        this.objTitulo.componente.coreNuevo();
    }

    guardar() {
        this.objTitulo.componente.coreGuardar();
    }

    salir() {
        this.objTitulo.componente.coreSalir();
    }

    varios(accion: any) {
        this.objTitulo.componente.coreAccion(accion);
    }

    buscar() {
        this.objTitulo.componente.coreBuscar();
    }



    accionRealizar(boton: ObjetoBoton) {

        if (boton.accion == ConstanteAngular.ACCION_SOLICITADA_GUARDAR) {
            this.guardar();
        }

        if (boton.accion == ConstanteAngular.ACCION_SOLICITADA_SALIR) {
            this.salir()
        }

        if (boton.accion == ConstanteAngular.ACCION_SOLICITADA_NUEVO) {
            this.nuevo()
        }

        if (boton.accion == ConstanteAngular.ACCION_SOLICITADA_BUSCAR) {
            this.buscar()
        }

        else {
            this.varios(boton.accion)
        }


    }


}
