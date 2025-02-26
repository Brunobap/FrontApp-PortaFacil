import { endDeslogar, endLogin } from "../constants/EndPoints";

export async function CheckLogin (req){
    // Enviar a requisição para o endereço da API
    let valor;
    try {
        valor = await fetch(endLogin, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req)
        });
        
    // Não fazer nada, a mensagem de resposta vai pro console sozinha
    } catch (erro) {}
    
    // Olhar o status da resposta
    const status = valor.status;
    if (status != 200) return null
    // Se positivo, salvar os cookies e devolver o objeto do usuário
    else return valor.json();
}

export async function Logout(token) {
    // Enviar a requisição para o endereço da API
    let valor;
    try {
        valor = await fetch(endDeslogar, { 
            method: "POST", 
            headers: { 'Authorization': `Bearer ${token}` } 
        });

    // Não fazer nada, a mensagem de resposta vai pro console sozinha
    } catch (erro) { return }
    
    // Olhar o status da resposta
    const status = valor.status;
    if (status != 200) return null; 
    // Se positivo, devolver o array
    else return valor.json();
}