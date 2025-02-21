import React from 'react';
import { View } from 'react-native';
import BotaoVazado from '@/components/BotaoPersonalizado';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '@/constants/Styles';
import { objPorta } from '@/constants/Types';
import { router } from 'expo-router';

export default function BlocoPortas(props: {porta: objPorta}) {
    const cor = (props.porta.status ? "green" : "red")
    const txtStatus = (props.porta.status ? "Aberto" : "Fechado")

    return (
        <View style={styles.roundBox}>
            <ThemedText type="subtitle">{props.porta.nome} - {props.porta.local}</ThemedText>
            <ThemedText type="subtitle" style={{color: cor}}>Status: {txtStatus}</ThemedText>
            <View style={{ flex: 1, flexDirection: "row" }}>
                {[
                  props.porta.tipoAcesso === "bloq" ? <BotaoSolicitar/> : <></>,
                  props.porta.tipoAcesso === "livre" ? <BotaoAbrir/> : <></>,
                  props.porta.tipoAcesso === "admin" ? [
                    <BotaoAbrir key={1}/>,
                    <BotaoAdmin key={2}/>
                   ] : <></>,
                ]}
            </View>
        </View>
    );

    // Tipos de botões para o card
    function BotaoSolicitar() {
        return (
            <BotaoVazado fundo
                href={`${props.porta.nome.toLowerCase().replace(/\s+/g, '-')}`}
                cor={"red"}
                legenda="Solicitar Acesso"
                type='defaultSemiBold'
            />
        )
    }
    function BotaoAdmin() {
        return (
            <BotaoVazado fundo
                href={`../(hidden)/adm_door?porta=${props.porta.nome.toLowerCase().replace(/\s+/g, '-')}`}
                cor={"blue"}
                legenda="Administrar"
                type='defaultSemiBold'
            />
        )
    }
    function BotaoAbrir() {
        function AbrirPorta(id: number) {
            // Montar a requisição do backend

            // Enviar ao endpoint

            // Atualizar a tela
            router.reload()
        }

        return (
            <BotaoVazado fundo
                onPress={() => AbrirPorta(props.porta.id)}
                legenda="Abrir"
                type='defaultSemiBold'
            />
        )
    }
}