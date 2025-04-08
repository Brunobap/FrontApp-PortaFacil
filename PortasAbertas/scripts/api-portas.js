// Endereço de buscar as portas
import { endAbrir, endListarCoord, endListarPortas, endStatus } from "@/constants/EndPoints"
 
export async function getPortas(token) {    
    // Enviar a requisição para o endereço da API
    let valor;
    try {
        valor = await fetch(endListarPortas, { headers: {"Authorization":`Bearer ${token}`} })        

    // Não fazer nada, a mensagem de resposta vai pro console sozinha
    } catch (erro) { return }
    
    // Olhar o status da resposta
    const status = valor.status;
    if (status != 200) return null; 
    // Se positivo, devolver o array
    else return valor.json();
}

export async function getDoorAdmins(token, id) {
    // Enviar a requisição para o endereço da API
    let valor;
    try {
        valor = await fetch(endListarCoord+id+'/', { headers: {"Authorization":`Bearer ${token}`} })        

    // Não fazer nada, a mensagem de resposta vai pro console sozinha
    } catch (erro) { return }
    
    // Olhar o status da resposta
    const status = valor.status;
    if (status != 200) return null; 
    // Se positivo, devolver o array
    else return valor.json();
}

export async function abrir(token) {
    let valor;
    try {
        valor = await fetch(endAbrir, {
            headers: {"Authorization":`Bearer ${token}`} 
        })

    // Não fazer nada, a mensagem de resposta vai pro console sozinha
    } catch (erro) { return }
    
    // Olhar o status da resposta
    const status = valor.status;
    if (status != 200) return null; 
    // Se positivo, devolver o array
    else return valor.json();
}

export async function getStatus(token) {
    let valor;
    try {
        valor = await fetch(endStatus, {
            headers: {"Authorization":`Bearer ${token}`} 
        })        

    // Não fazer nada, a mensagem de resposta vai pro console sozinha
    } catch (erro) { return }
    
    // Olhar o status da resposta
    const status = valor.status;
    if (status != 200) return null; 
    // Se positivo, devolver o array
    else return valor.json();
}