export class Tarea{
    public id: number;
    public referencia: string;
    public logo: string;
    public usuario :string;
    public observacion: string;
    public cantidad: number;
    public estado: string;
    public fecha: Date;
    public tipo: string;
    public codigo_cliente: string;
    public alias_cliente: string

    constructor(json:any){
        this.id = json.id;
        this.referencia = json.referencia;
        this.logo = json.logo;
        this.usuario = json.usuario;
        this.observacion = json.observacion;
        this.cantidad = json.cantidad;
        this.estado = json.estado;
        this.fecha = json.fecha;
        this.tipo = json.tipo;
        this.codigo_cliente = json.codigo_cliente;
        this.alias_cliente = json.alias_cliente;
    }
}