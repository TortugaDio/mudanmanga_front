import { OnInit } from '@angular/core';
 
import { MenuItem, SelectItem, MessageService, LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { ServicioComunService } from 'src/app/mudanscanlation/modulos/framework-comun/servicioComun.service';
import { DtoTabla } from '../../modelo/generico/dto/DtoTabla';
import { NoAuthorizationInterceptor } from '../interceptor/NoAuthorizationInterceptor';
import { BaseComponent } from './BaseComponent';

export class FormularioBaseComponent extends BaseComponent implements OnInit{

    // DARIO: servicio local-inicio
    servicioComunLocal: ServicioComunService;
    noAuthorizationInterceptorLocal: NoAuthorizationInterceptor;
    // DARIO: servicio local-fin

    constructor(        
        noAuthorizationInterceptor: NoAuthorizationInterceptor,
        messageService: MessageService,        
        servicioComun: ServicioComunService        
         ) {     
             super(noAuthorizationInterceptor, messageService, servicioComun);      
             this.servicioComunLocal = servicioComun;
             this.noAuthorizationInterceptorLocal=noAuthorizationInterceptor;    
        }
    
        // DARIO: para el llenado de los combos especificar la etiqueta que tendra
    /*miscelaneosListar(tipo: number, aplicacionCodigo: string, 
        codigoTabla: string,
         codigoCompania: string, lstDatos: SelectItem[]): Promise<number>{
        lstDatos.push({ label: 'Seleccione', value: null });
        return this.servicioComunLocal.listaractivos(codigoCompania, aplicacionCodigo, codigoTabla).then(res => {            
            res.forEach(ele => {
                lstDatos.push({ label: ele.nombre, value: ele.codigo });
            });
            return 1;
        });
    }*/

    ngOnInit() {
        var erroresList: DtoTabla[] = [];
        this.noAuthorizationInterceptorLocal.dataStream$().subscribe(errores => {
            this.messageService.clear();
            if (errores != undefined) {
                erroresList = [];

                if (errores.error.flagTabla) {
                    //this.verTablaErrores = true;
                    var c = 1;
                    errores.error.errores.forEach(element => {
                        var er = new DtoTabla();
                        er.id = c;
                        er.descripcion = element.Mensaje;
                        erroresList.push(er);
                        c++;
                    });
                }
                else {
                    this.messageService.addAll(this.getMensajesUsuario(errores.error.errores));
                }
            }
        });
    }
    
}