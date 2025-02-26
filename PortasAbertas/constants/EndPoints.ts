
// Endereços para as funcionalidades do backend
// Usados pelas funções na pasra "scripts"
export const serverBack = "http://localhost:8000/api/"

const endAuth = serverBack + "auth/"

export const endLogin = endAuth + "login/"
export const endRegister = endAuth + "register/"
export const endDeslogar = endAuth + "logout/"

export const endListarPortas = serverBack + "room/listAll/"