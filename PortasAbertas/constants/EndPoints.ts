
// Endereços para as funcionalidades do backend
// Usados pelas funções na pasra "scripts"
export const serverBD = "http://192.168.159.236:8080/"

const endAuth = serverBD + "api/auth/"

export const endLogin = endAuth + "login/"
export const endRegister = endAuth + "register/"
export const endDeslogar = endAuth + "logout/"

export const endListarPortas = serverBD + "api/room/list/"
export const endListarCoord = serverBD + "api/room/"

export const endAbrir = serverBD + "control/PB01/LAB01/11111/abrir"
export const endStatus = serverBD + "control/PB01/LAB01/11111/status"