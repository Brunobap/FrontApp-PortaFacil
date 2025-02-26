import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import BotaoVazado from '@/components/BotaoPersonalizado';
import { ThemedText } from '@/components/ThemedText';
import { styles } from '@/constants/Styles';
import { objSala } from '@/constants/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { abrir, getStatus } from '@/scripts/api-portas';

export default function BlocoPortas(props: {porta: objSala}) {
    const objPorta = props.porta.iotobjects[0]
    const [status, setStatus] = useState(objPorta.status)
    const cor = (status == "ABERTA" ? "green" : "red")

    const atualizaStatus = async () => {
        AsyncStorage.getItem("accessToken").then(async token => {
            // Pedir as portas ao backend
            const resposta = await getStatus(token)            
            setStatus(resposta.status)
        })
    }
    useEffect(() => {
        atualizaStatus()
    }, [])
    
    // Nome do usuário, para comparação
    const [nome, setNome] = useState<string | null>("")
    AsyncStorage.getItem("ra").then(valor => setNome(valor))

    var tipoAcesso = 'bloq'    
    for(var i=0; i<props.porta.users.length; i++) {
        // Se a pessoa for administrador tem acesso livre a porta
        const element = props.porta.users[i].user
        if (element == nome){
            tipoAcesso = 'livre'            
            break
        }
    };
    for(var i=0; i<props.porta.department.coordinators.length; i++) {
        // Se a pessoa for administrador tem acesso livre a porta
        const element = props.porta.department.coordinators[i].user        
        if (element == nome){
            tipoAcesso = 'admin'            
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
            <ThemedText type="subtitle" style={{color: cor}}>Status: {status}</ThemedText>
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
                /*href={`../(hidden)/${props.porta.code}`}*/
                cor={"red"}
                legenda="Solicitar Acesso"
                type='defaultSemiBold'
            />
        )
    }
    function BotaoAdmin() {
        return (
            <BotaoVazado fundo
                href={`../(hidden)/adm_door?id=${props.porta.id}`}
                cor={"blue"}
                legenda="Administrar"
                type='defaultSemiBold'
            />
        )
    }
    function BotaoAbrir() {
        function AbrirPorta(id: number) {
            // Montar a requisição do backend
            AsyncStorage.getItem("accessToken").then(async token => {
                // Pedir as portas ao backend
                const portas = await abrir(token)
            })
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