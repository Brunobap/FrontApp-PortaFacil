import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoVazado from '@/components/BotaoVazado';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '@/constants/Styles';

export default function BlocoPortas(props: {porta: {titulo: string, local: string, status: boolean}}) {
    return (
        <View style={styles.roundBox}>
            <ThemedText type="subtitle">{props.porta.titulo} - {props.porta.local}</ThemedText>
            <ThemedText type="subtitle">Status: {props.porta.status ? "Aberto" : "Fechado"}</ThemedText>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
                <BotaoVazado 
                    href={`${props.porta.titulo.toLowerCase().replace(/\s+/g, '-')}`}
                    legenda="Solicitar Acesso"
                    size='peq'
                    />
            </View>
        </View>
    );
}