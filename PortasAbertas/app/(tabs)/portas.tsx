import React, { useEffect, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import BlocoPortas from '@/components/BlocoPortas';
import { getPortas } from "@/scripts/api-portas";
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { ScrollView, View } from 'react-native';
import BarraSuperior from '@/components/BarraSuperior';
import arrayPortas from '@/dummies/obj-portas';

export default function Portas() {
    // Requisitar as portas disponíveis ao usuário para montar a tela
    const [portas, setPortas] = useState<{"titulo": string, "local": string, "status": boolean, "tipoAcesso": string}[]>(arrayPortas);

    // Simulação de requisição de usuários
    useEffect(() => {
        setPortas(arrayPortas);
    }, [portas]);

    // Pegar as informações do usuário

    return (
        <ThemedView style={styles.container}>
            {/* Menu lateral */}
            <BarraSuperior titulo='Olá, * nome vai aqui *' show='menu'/>

            {/* Lista de portas */}
            <ScrollView style={styles.roundBox}>
                {portas.map((porta, index) => 
                    <BlocoPortas key={index} porta={porta} />
                )}
            </ScrollView>
        </ThemedView>
    );
}
