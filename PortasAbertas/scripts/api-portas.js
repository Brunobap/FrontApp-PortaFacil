
// Objetos para teste
import arrayPortas from "@/dummies/obj-portas";

export async function getPortas(req) {
    // Por hora, só devolve o objeto estático em dummies
    return arrayPortas
}