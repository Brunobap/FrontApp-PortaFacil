
// Tipos de Objetos
export type objUser = { id: number; user: string, nivel: string };
export type objSala = {
    admin: []; 
    code: string,
    department: {},
    id: number,
    iotobjects: objIOT[],
    name: string,
    users: [{}]
};
export type objIOT = { description: string, id: number; mac: string, status: string };
export type objDepartment = { id: number, name: string, code: string, coordinators: objUser[] }

// Tipos de parâmetros
export type tipoAcesso = ( "padrao" | "coordenador" | "administrador" | "servidor" )
export type tipoTexto = ( "link" | "title" | "default" | "defaultSemiBold" | "subtitle" )