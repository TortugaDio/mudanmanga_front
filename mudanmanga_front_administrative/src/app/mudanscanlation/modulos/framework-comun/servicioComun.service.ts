 
import { ConstanteAngular } from './../../framework/angular/ConstanteAngular';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { ObjetoTitulo } from './../../framework/angular/dominio/ObjetoTitulo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfig } from 'src/environments/appconfig';
import { DtoTabla } from '../../framework/modelo/generico/dto/DtoTabla';
 

@Injectable()
export class ServicioComunService {

    private urlempleado = `${this.config.getEnv('spring-framework-comun-api')}/spring/core/empleadomastcomun/`;
    private urlpersona = `${this.config.getEnv('spring-framework-comun-api')}/spring/core/personamastcomun/`;
    private url = `${this.config.getEnv('spring-framework-comun-api')}spring/core/mamiscelaneosdetallecomun/`;
    private urlparametros = `${this.config.getEnv('spring-framework-comun-api')}spring/core/parametrosmastcomun/`;
    private aplicacionmast = `${this.config.getEnv('spring-wh-api')}spring/core/aplicacionesmast/`;
    private urldirectorio = `${this.config.getEnv('spring-framework-comun-api')}spring/core/directorio/`;

    private urlSeguridadComun = `${this.config.getEnv('spring-framework-comun-api')}spring/seguridad/seguridadautorizacionescomun/`;

    constructor(private http: HttpClient, private config: AppConfig) { }

    private itemsSource = new Subject<ObjetoTitulo>();
    private bloqueoSource = new Subject<Boolean>();
    private breadSource = new Subject<MenuItem[]>();
    private breadSourceMovil = new Subject<MenuItem[]>();
    private breadIconSource = new Subject<MenuItem>();

    itemsHandler = this.itemsSource.asObservable();
    bloqueoHandler = this.bloqueoSource.asObservable();
    breadHandler = this.breadSource.asObservable();
    breadHandlerMovil = this.breadSourceMovil.asObservable();
    breadIconHandler = this.breadIconSource.asObservable();

    setItems(items: ObjetoTitulo) {
        this.itemsSource.next(items);
    }

    setBloqueo(bloqueo: boolean) {
        this.bloqueoSource.next(bloqueo);
    }

    setBread(bread: MenuItem[], breadMovil: MenuItem[]) {
        this.breadSource.next(bread);
        this.breadSourceMovil.next(breadMovil);
    }

    setBreadIcon(icon: MenuItem) {
        this.breadIconSource.next(icon);
    }

   /* PersonaPorDtoApi(persona: number): Promise<PersonamastTransaccion> {
        var dtoempleado = new PersonamastTransaccion();
        dtoempleado.persona = persona;
        return this.http.put(this.urlpersona + 'obtenerpersonapordtoapi', dtoempleado)
            .toPromise()
            .then(response => response as PersonamastTransaccion)
            .catch(error => new PersonamastTransaccion());
    }

    EmpleadoPorDtoApi(compania: string, empleado: number): Promise<EmpleadomastTransaccion> {
        var dtoempleado = new EmpleadomastTransaccion();
        dtoempleado.companiasocio = compania;
        dtoempleado.empleado = empleado;
        return this.http.put(this.urlempleado + 'obtenerempleadopordtoapi', dtoempleado)
            .toPromise()
            .then(response => response as EmpleadomastTransaccion)
            .catch(error => new EmpleadomastTransaccion());
    }

    public listaractivos(codigoCompania: string, aplicacionCodigo: string, codigoTabla: string): Promise<DtoTabla[]> {
        var dto: DtoComunMaMiscelaneosdetalle = new DtoComunMaMiscelaneosdetalle();
        dto.compania = codigoCompania;
        dto.aplicacioncodigo = aplicacionCodigo;
        dto.codigotabla = codigoTabla;
        dto.estado = ConstanteAngular.ESTADO_ACTIVO;
        return this.listaractivosporheader(dto);
    }

    public listaractivosComun(codigoCompania: string, aplicacionCodigo: string, codigoTabla: string): Promise<DtoTabla[]> {
        var dto: DtoComunMaMiscelaneosdetalle = new DtoComunMaMiscelaneosdetalle();
        dto.compania = codigoCompania;
        dto.aplicacioncodigo = aplicacionCodigo;
        dto.codigotabla = codigoTabla;
        dto.estado = "A";
        return this.listaractivosporheader(dto);
    }


    public listaractivosporheader(filtro: DtoComunMaMiscelaneosdetalle): Promise<DtoTabla[]> {
        return this.config.getHttp().put(this.url + 'listartablaporheader', filtro)
            .toPromise()
            .then(response => response as DtoTabla[])
            .catch(error => []);
    }

    comparar(dto: DtoBdComparar): Promise<DtoBdComparar> {
        return this.http.put(this.aplicacionmast + 'comparar', dto)
            .toPromise()
            .then(response => response as DtoBdComparar)
            .catch(error => new DtoBdComparar());
    }

    dbEjecutar(dto: DtoBdEjecutar): Promise<DtoBdEjecutar> {

        return this.http.put(this.aplicacionmast + 'ejecutar', dto)
            .toPromise()
            .then(response => response as DtoBdEjecutar)
            .catch(error => new DtoBdEjecutar());
    }


    public parametroobtener(dto: ParametroTransaccion): Promise<ParametroTransaccion> {
        return this.config.getHttp().put(this.urlparametros + 'parametroobtener', dto)
            .toPromise()
            .then(response => response as ParametroTransaccion)
            .catch(error => null);
    }

    verDirectorio(filtro: FiltroDirectorio): Promise<DtoArbolFile> {
        return this.http.post(this.urldirectorio + 'verDirectorio', filtro)
            .toPromise()
            .then(response => response as DtoArbolFile)
            .catch(error => new DtoArbolFile());
    }
*/
    public tieneAcceso(aplicacioncodigo: string, grupo: string, concepto: string): Promise<DtoTabla> {

        const params = new HttpParams()
            .set('aplicacioncodigo', aplicacioncodigo)
            .set('grupo', grupo)
            .set('concepto', concepto);
        //GET CON CUERPO ACT
        var dto = new DtoTabla();
        dto.codigo = aplicacioncodigo;
        dto.descripcion = grupo;
        dto.nombre = concepto;

        return this.config.getHttp().put(this.urlSeguridadComun + 'tieneAcceso', dto)
            .toPromise()
            .then(response => {
                return response as DtoTabla;
            })
            .catch(error => null);
    }

}

export function CONVERTIR_FOTO(d) {
    if (d === undefined || d == null || d === '') {
        d = 'assets/layout/images/user.png';
    } else {
        d = 'data:image/jpg;base64,' + d;
    }
    return d;
}