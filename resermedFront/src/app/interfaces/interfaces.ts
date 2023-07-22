export interface ICita {
    id: number,
    fecha: string
    horaInicio: string,
    horaTermino: string,
    costo: number,
}

export interface IMedico{
    id: number,
    nombre:string,
    apellido:string,
    rut:string,
    email:string,
    especialidad:string
    password:string,
    img_url:string,
    telefono:number,
}
export interface IUsuario{
    id: number,
    nombre:string,
    apellido:string,
    rut:string,
    email:string,
    password:string,
    img_url:string,
    telefono:number,
}

export interface IMantenedor{
    id: number,
    nombre:string,
    apellido:string,
    rut:string,
    email:string,
    password:string,
    img_url:string,
    telefono:number,
}