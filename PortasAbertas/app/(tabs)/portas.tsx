import React, { useEffect, useState } from 'react';
import BlocoPortas from '@/components/BlocoPortas';
import { getPortas } from "@/scripts/api-portas";
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { Alert, ScrollView } from 'react-native';
import BarraSuperior from '@/components/BarraSuperior';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';
import { objIOT, objSala } from '@/constants/Types';

export default function Portas() {
    // Requisitar as portas disponíveis ao usuário para montar a tela
    const [portas, setPortas] = useState<objSala[] | undefined>();

    // E as informações do usuário que serão usadas
    const [nome, setNome] = useState<string>("* nome vai aqui*");
    const [isAdmin, setAdmin] = useState<boolean>(false);

    useEffect(() => {
        if (portas != undefined) return
        // Pegar o token de acesso ao backend
        AsyncStorage.getItem("accessToken").then(async token => {
            // Pedir as portas ao backend
            const portas = await getPortas(token)
            console.log(portas);
            
            // Ver se elas chegaram mesmo
            // Se o resultado não for bom, devolver um aviso            
            if (portas == null) {
                // Aviso para celular
                Alert.alert("Erro ao buscar informações.","Por favor, reinicie o aplicativo")
                // Aviso para computador
                alert("Erro ao buscar informações.\nPor favor, reinicie o aplicativo")
                return
            
            // Se for, colocar no estado
            } else setPortas(portas)
    
            // Pedir as informações do usuário no backend, também
            AsyncStorage.getItem("ra").then(valor => {
                if (valor != null) {
                    setNome(valor)
                    // Ver se o usuário tá na lista de admins
                    for (var i=0; i<portas.length; i++){
                        const porta = portas[i]
                        for(var j=0; i<porta.admin.length; i++) {
                            // Se a pessoa for administrador tem acesso livre a porta
                            const element = porta.admin[i].user
                            if (element == valor){
                                setAdmin(true)
                                break
                            }
                        };
                    }
                }
            })
        })
    })

    return (
        <ThemedView style={styles.container}>
            {/* Menu lateral */}
            <BarraSuperior titulo={`Olá, ${nome}`} show={isAdmin ? 'menu-comp' : 'menu'}/>

            {/* Lista de portas */}
            <ScrollView style={styles.roundBox}>
                {portas != undefined ? portas.map((porta) => <BlocoPortas porta={porta} />) : <ThemedText type='title'>Não há portas cadastradas para você</ThemedText>
                }
            </ScrollView>
        </ThemedView>
    );
}
