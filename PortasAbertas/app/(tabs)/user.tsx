import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import BlocoPortas from '@/components/BlocoPortas';
import {getPortas} from "@/scripts/api-portas";
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { ScrollView } from 'react-native';
 
export default async function UserPage() {
    // Requisitar as portas disponíveis ao usuário para montar a tela
    const arrayPortas = await getPortas();

    const handleSolicitarAcesso = () => {
        console.log('Solicitar Acesso pressionado');
        // Lógica para solicitar acesso
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title" style={{color: Colors.verdeClaro}}>Usuario</ThemedText>

            <ScrollView style={styles.roundBox}>
                { // Caixa com as portas do usuário
                arrayPortas.map((porta) => 
                    <BlocoPortas porta={porta}/>
                )}
            </ScrollView>
        </ThemedView>
    );
}