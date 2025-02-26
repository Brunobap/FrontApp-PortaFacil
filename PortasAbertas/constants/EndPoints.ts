
// Endereços para as funcionalidades do backend
// Usados pelas funções na pasra "scripts"
export const serverBack = "http://localhost:8000/"

const endAuth = serverBack + "api/auth/"

export const endLogin = endAuth + "login/"
export const endRegister = endAuth + "register/"
export const endDeslogar = endAuth + "logout/"

export const endListarPortas = serverBack + "api/room/listAll/"