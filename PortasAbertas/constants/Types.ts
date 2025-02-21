
// Tipos de Objetos
export type objUser = { id: number; nome: string, nivel: string };
export type objPorta = { id: number; nome: string, local: string, status: boolean, tipoAcesso: tipoAcesso };
export type objSala = { id: number; nome: string, portas: objPorta[] };

// Tipos de parâmetros
export type tipoAcesso = ( "livre" | "bloq" | "admin" )
export type tipoTexto = ( "link" | "title" | "default" | "defaultSemiBold" | "subtitle" )