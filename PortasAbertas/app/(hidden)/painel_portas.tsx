import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { ScrollView } from 'react-native';
import BarraSuperior from '@/components/BarraSuperior';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { ThemedText } from '@/components/ThemedText';

export default function PainelPortas() {
    // Dados das portas (simulando uma lista de portas)
    const portas = [
        { nome: 'LATIN - BIBLIOTECA', local: 'CEDTAR' },
        { nome: 'SALA 6 - ACADÉMICO', local: 'CEDTAR' },
        { nome: 'ESPAÇO MAKER - BIBLIOTECA', local: 'CEDTAR' },
        { nome: 'LAB INFO 1 - "PRÉDIO VEENÍCLHO"', local: 'CEDTAR' },
    ];

    return (
        <ThemedView style={styles.container}>
            {/* Barra superior com botão de retornar */}
            <BarraSuperior titulo="Painel Portas" show='voltar' destinoVoltar="/(tabs)\portas" />

            {/* Lista de portas */}
            <ScrollView style={styles.roundBox}>
                {portas.map((porta, index) => (
                    <ThemedView key={index} style={styles.roundBox}>
                        {/* Nome e local da porta */}
                        <ThemedText type="subtitle">{porta.nome}</ThemedText>
                        <ThemedText type="subtitle">{porta.local}</ThemedText>

                        {/* Botão EDITAR */}
                        <BotaoPersonalizado
                            legenda="EDITAR"
                            href="../(tabs)/edit_portas" // Navega para a página de edição
                        />
                    </ThemedView>
                ))}

                {/* Botão ADICIONAR (apenas se o usuário for admin) */}
                <BotaoPersonalizado
                    legenda="+ ADICIONAR"
                    href="/(tabs)\add_portas" // Navega para a página de adição
                    fundo // Adiciona um fundo ao botão
                />
            </ScrollView>
        </ThemedView>
    );
}