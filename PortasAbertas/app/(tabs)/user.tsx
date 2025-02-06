import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import BlocoPortas from '@/components/BlocoPortas';

export default function UserPage() {
    const handleSolicitarAcesso = () => {
        console.log('Solicitar Acesso pressionado');
        // Lógica para solicitar acesso
    };

    return (
        <View style={styles.container}>
            <ThemedText type="title" style={styles.title}>Usuario</ThemedText>

            <BlocoPortas titulo="LATIN" onPress={handleSolicitarAcesso} />
            <BlocoPortas titulo="SALA 6" onPress={handleSolicitarAcesso} />
            <BlocoPortas titulo="ESPACO MAKER" onPress={handleSolicitarAcesso} />
            <BlocoPortas titulo="SALA 10" onPress={handleSolicitarAcesso} />
            <BlocoPortas titulo="LAB III INFORMÁTICA" onPress={handleSolicitarAcesso} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.fundo,
    },
    title: {
        marginBottom: 20,
        color: Colors.verdeClaro,
        textAlign: 'center',
    },
});