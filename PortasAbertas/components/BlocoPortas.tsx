import React from 'react';
import { View } from 'react-native';
import BotaoVazado from '@/components/BotaoPersonalizado';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '@/constants/Styles';
import { objIOT, objSala } from '@/constants/Types';
import { router } from 'expo-router';

export default function BlocoPortas(props: {porta: objSala}) {
    const objPorta = props.porta.iotobjects[0]
    const cor = (objPorta.status == "Aberto" ? "green" : "red")

    return (
        <View style={styles.roundBox}>
            <ThemedText type="subtitle">{props.porta.name} - {props.porta.department.name}</ThemedText>
            <ThemedText type="subtitle" style={{color: cor}}>Status: {objPorta.status}</ThemedText>
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
                href={`${objPorta.mac}`}
                cor={"red"}
                legenda="Solicitar Acesso"
                type='defaultSemiBold'
            />
        )
    }
    function BotaoAdmin() {
        return (
            <BotaoVazado fundo
                href={`../(hidden)/adm_door?porta=${objPorta.mac}`}
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