export interface ICita {
    fecha: string;
    horaInicio: string;
    horaTermino: string;
}

export interface medicos{
    Nombre:string;
    Ubicacion:string;
    Especialidad:string;
    Valoracion:number;
    Foto:string;
    Costo:number;
}
export interface usuario{
    nombre:string,
    apellido:string,
    rut:string,
    email:string,
    password:string,
    img_url:string
}