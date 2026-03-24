export interface TokenPayload {
    idCredencial: string;
    curp: string;
    correo: string;
    celular: string;
    aplicaciones: string;
    grupos: string;
    nombre: string;
    exp: number;
}

export interface ParsedToken {
    idCredencial: string;
    curp: string;
    correo: string;
    celular: string;
    aplicaciones: string;
    grupos: string;
    nombre: string;
    token: string;
}