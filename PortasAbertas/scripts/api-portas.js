// Endereço de buscar as portas
import { endListarPortas } from "@/constants/EndPoints"
 
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

export async function getDoorAdmins(head) {
    
}