import React, { useEffect, useState } from 'react';
import BlocoPortas from '@/components/BlocoPortas';
import { getPortas } from "@/scripts/api-portas";
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { ScrollView } from 'react-native';
import BarraSuperior from '@/components/BarraSuperior';
import { objPorta } from '@/constants/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';

export default function Portas() {
    // Requisitar as portas disponíveis ao usuário para montar a tela
    const [portas, setPortas] = useState<objPorta[]>([]);

    // Pegar as informações do usuário
    const [nome, setNome] = useState<String | null>("");
    const [email, setEmail] = useState<String | null>("");
    const [nivel, setNivel] = useState<String | null>("");
    useEffect(() => {
        // Simulação de requisição de portas
        setPortas(getPortas()); 

        AsyncStorage.getItem("nomeUsuario").then((valor) => setNome(valor))
        AsyncStorage.getItem("emailUsuario").then((valor) => setEmail(valor))
        AsyncStorage.getItem("nivelUsuario").then((valor) => setNivel(valor))
    })


    return (
        <ThemedView style={styles.container}>
            {/* Menu lateral */}
            <BarraSuperior titulo={`Olá, ${nome}`} show='menu'/>

            {/* Lista de portas */}
            <ScrollView style={styles.roundBox}>
                {portas.map((porta: objPorta) => <BlocoPortas porta={porta} />)}
                    
                {// Caso o usuário seja um admin, ele tem o poder de adicionar portas
                nivel == "admin" ? <BotaoPersonalizado fundo legenda='+ Adicionar'/> : <></>
                }
            </ScrollView>
        </ThemedView>
    );
}
