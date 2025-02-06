import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoVazado from '@/components/BotaoVazado';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';

export default function BlocoPortas({ titulo, onPress }) {
    return (
        <View style={styles.section}>
            <ThemedText type="subtitle" style={styles.subtitle}>{titulo}</ThemedText>
            <View style={styles.buttonContainer}>
                <BotaoVazado href={`/${titulo.toLowerCase().replace(/\s+/g, '-')}`} legenda="Solicitar Acesso" onPress={onPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    subtitle: {
        marginBottom: 10,
        color: Colors.verdeClaro,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
    },
});