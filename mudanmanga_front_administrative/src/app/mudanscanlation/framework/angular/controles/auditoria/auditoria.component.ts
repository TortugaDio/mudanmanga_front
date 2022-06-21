 
import { Component, OnInit, ViewChild, ChangeDetectorRef, Input, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ServicioComunService } from 'src/app/mudanscanlation/modulos/framework-comun/servicioComun.service';
import { PrincipalBaseComponent } from '../../component/PrincipalBaseComponent';
import { NoAuthorizationInterceptor } from '../../interceptor/NoAuthorizationInterceptor';
 

@Component({
    selector: 'app-auditoria',
    templateUrl: 'auditoria.component.html'
})

export class AuditoriaComponent extends PrincipalBaseComponent implements OnInit {        

    @Input() tipoAuditoria = '';
    @Input() creacionFecha = new Date();
    @Input() creacionUsuario = '';
    @Input() modificacionUsuario = '';    
    @Input() modificacionFecha = new Date();

    
    @Input() aprobacionUsuario = '';
    @Input() aprobacionFecha = new Date();

    constructor(
        noAuthorizationInterceptor: NoAuthorizationInterceptor,
        messageService: MessageService,
        servicioComun: ServicioComunService,
        private cdref: ChangeDetectorRef
        
    ) {super(noAuthorizationInterceptor, messageService,servicioComun); }    

    ngOnInit() {                
        console.log('iniciarAuditoria');
       this.modificacionFecha=new Date();
    }

    public ngAfterViewInit(): void {
    }

    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }    


}
