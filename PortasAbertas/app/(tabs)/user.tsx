import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import BlocoPortas from '@/components/BlocoPortas';
import { getPortas } from "@/scripts/api-portas";
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { ScrollView, View } from 'react-native';
import SidebarMenu from '@/components/SidebarMenu'; // Importando o menu

export default async function UserPage() {
    // Requisitar as portas disponíveis ao usuário para montar a tela
    const arrayPortas = await getPortas();

    return (
        <ThemedView style={styles.container}>
            {/* Menu lateral */}
            <View style={{ position: 'absolute', top: 10, left: 10, zIndex: 10 }}>
                <SidebarMenu />
            </View>

            {/* Título */}
            <ThemedView style={{ marginTop: 30, alignItems: 'center' }}>
                <ThemedText type="title" style={{ color: Colors.verdeClaro }}>
                    *nome vai aqui*
                </ThemedText>
            </ThemedView>

            {/* Lista de portas */}
            <ScrollView style={styles.roundBox}>
                {arrayPortas.map((porta, index) => 
                    <BlocoPortas key={index} porta={porta} />
                )}
            </ScrollView>
        </ThemedView>
    );
}
