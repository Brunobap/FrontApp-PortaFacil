import React from 'react';
import { View } from 'react-native';
import BotaoVazado from '@/components/BotaoPersonalizado';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '@/constants/Styles';
import { objUser, objSala } from '@/constants/Types';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BlocoPortas(props: {porta: objSala}) {
    const objPorta = props.porta.iotobjects[0]
    const cor = (objPorta.status == "Aberto" ? "green" : "red")
    
    // Nome do usuário, para comparação
    var nome: string | null
    nome = ""
    AsyncStorage.getItem("ra").then(valor => {nome = valor})

    var tipoAcesso = 'bloq'
    for(var i=0; i<props.porta.users.length; i++) {
        // Se a pessoa for usuário dessa porta ele tem acesso livre, pelo menos        
        const element = props.porta.users[i].user
        if (element == nome){
            tipoAcesso = 'livre'
            break
        }
    };
    for(var i=0; i<props.porta.admin.length; i++) {
        // Se a pessoa for administrador tem acesso livre a porta
        const element = props.porta.admin[i].user
        if (element == nome){
            tipoAcesso = 'admin'
            break
        }
    };

    return (
        <View style={styles.roundBox}>
            <ThemedText type="subtitle">{props.porta.name} - {props.porta.department.name}</ThemedText>
            <ThemedText type="subtitle" style={{color: cor}}>Status: {objPorta.status}</ThemedText>
            <View style={{ flex: 1, flexDirection: "row" }}>
                {[
                  tipoAcesso === "bloq" ? <BotaoSolicitar/> : <></>,
                  tipoAcesso === "livre" ? <BotaoAbrir/> : <></>,
                  tipoAcesso === "admin" ? [
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
                href={`../(hidden)/${objPorta.mac}`}
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