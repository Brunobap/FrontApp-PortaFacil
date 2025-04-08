
import { tipoAcesso } from "@/constants/Types"

// Arquivos com objetos para simular informações requeridas
export const arrayPortas = [
    {
        nome: "LATIN",
        local: "Biblioteca",
        status: true,
        id: 15,
        tipoAcesso: "bloq",
    },
    {
        nome: "Espaço Maker",
        local: "Biblioteca",
        status: false,
        id: 8,
        tipoAcesso: "admin",
    },
    {
        nome: "Sala 1",
        local: "Acadêmico",
        status: true,
        id: 46,
        tipoAcesso: "livre",
    },
    {
        nome: "Sala 5",
        local: "Acadêmico",
        status: true,
        id: 132,
        tipoAcesso: "livre",
    },
    {
        nome: "Sala 6",
        local: "Acadêmico",
        status: true,
        id: 6,
        tipoAcesso: "livre",
    },
    {
        nome: "Sala 8",
        local: "Acadêmico",
        status: true,
        id: 36,
        tipoAcesso: "livre",
    },
    {
        nome: "Sala 10",
        local: "Acadêmico",
        status: true,
        id: 67,
        tipoAcesso: "livre",
    },
    {
        nome: "Lab III Info",
        local: "Prédio Elet.",
        status: false,
        id: 139,
        tipoAcesso: "bloq",
    }
]

export const userAluno = {
    nome: "* aluno *",
    nivel: "aluno",
    id: 82736759023
}
export const userAdm = {
    nome: "* administrador *",
    nivel: "admin",
    id: 91858697,
}

export const arrayCoord = [
    {
        nome: "* coord 01 *",
        nivel: "coord",
        id: 2356246757
    },
    {
        nome: "* coord 02 *",
        nivel: "coord",
        id: 19771531
    },
    {
        nome: "* coord 03 *",
        nivel: "coord",
        id: 97132184
    },
]
