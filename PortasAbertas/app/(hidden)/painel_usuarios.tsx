import React, { useEffect, useState } from 'react';
import { ThemedView} from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import { ScrollView, View } from 'react-native';
import BarraSuperior from '@/components/BarraSuperior';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemedText } from '@/components/ThemedText';

export default function PainelUsuarios() {
    const [usuarios, setUsuarios] = useState([
        { nome: 'FULANADMIN', tipo: 'ADMIN' },
        { nome: 'DOUGLAS', tipo: 'ADMIN' },
        { nome: 'FULANNINO', tipo: 'ALUNO' },
        { nome: 'SILVIO', tipo: 'PORTARIA' }
    ]);

    const [nivel, setNivel] = useState<String | null>("");

    useEffect(() => {
        AsyncStorage.getItem("nivelUsuario").then((valor) => setNivel(valor));
    }, []);

    // Função para determinar se o botão "EDITAR" deve ser exibido
    const deveExibirBotaoEditar = (usuarioTipo: string) => {
        // Exemplo de regra: só exibe o botão "EDITAR" para usuários do tipo "ADMIN" ou "PORTARIA"
        return nivel === "admin" && (usuarioTipo === "ALUNO" || usuarioTipo === "PORTARIA");
    };

    return (
        <ThemedView style={styles.container}>
            {/* Barra superior com botão de retornar */}
            <BarraSuperior titulo="Painel Usuários" show='voltar' destinoVoltar="/(tabs)\portas" />

            {/* Lista de usuários */}
            <ScrollView style={styles.roundBox}>
                {usuarios.map((usuario, index) => (
                    <View key={index} style={styles.roundBox}>
                        <ThemedText type="subtitle">{usuario.nome} ({usuario.tipo})</ThemedText>
                        {/* Condição para exibir o botão "EDITAR" */}
                        {deveExibirBotaoEditar(usuario.tipo) && (
                            <BotaoPersonalizado 
                                legenda="EDITAR" 
                                href={`/(tabs)\edit_admin${usuario.nome}`} // Passa o nome do usuário como parâmetro
                            />
                        )}
                    </View>
                ))}
            </ScrollView>
        </ThemedView>
    );
}