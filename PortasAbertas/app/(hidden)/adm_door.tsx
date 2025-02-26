import React, { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BlocoUsuario  from '@/components/BlocoUsuario'; // Componente de usuários
import BarraSuperior from '@/components/BarraSuperior';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { objUser } from '@/constants/Types';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDoorAdmins } from '@/scripts/api-portas';

export default function AdministrarSalaScreen() {
  const [usuarios, setUsuarios] = useState<objUser[] | undefined>()

  const [porta, setPorta] = useState<string | undefined>("")
  
  const { id } = useLocalSearchParams()
  const [codigo, setCodigo] = useState(id)

  // Simulação de requisição de usuários
  useEffect(() => {    
    if (usuarios != undefined) return
      // Pegar o token de acesso ao backend
      AsyncStorage.getItem("accessToken").then(async token => {
        // Pedir as portas ao backend
        const resposta = await getDoorAdmins(token, codigo)
        console.log(resposta);
        
        // Ver se elas chegaram mesmo
        // Se o resultado não for bom, devolver um aviso            
        if (resposta == null) {
            // Aviso para celular
            Alert.alert("Erro ao buscar informações.","Por favor, reinicie o aplicativo")
            // Aviso para computador
            alert("Erro ao buscar informações.\nPor favor, reinicie o aplicativo")
            return
        
        // Se for, colocar no estado
        }
        setUsuarios(resposta.department.coordinators)
        setPorta(resposta.name)
    })

  });


  return (
    <ThemedView style={styles.container}>
      <BarraSuperior titulo="ADMINISTRAR PORTA" show="voltar" destinoVoltar='portas'/>

      {/* Conteúdo */}
      <ScrollView style={styles.roundBox}>
        {/* Cabeçalho da lista */}
        <ThemedView style={[styles.header, {margin:0}]}>
          <ThemedText type='title'>"{porta}"</ThemedText>
          <BotaoPersonalizado href={`add_user?porta=${porta}`} fundo type="defaultSemiBold" legenda='+ Adicionar Usuário' />
        </ThemedView>

        {/* Lista de usuários */}
        {usuarios != undefined ? usuarios.map((user) => (
          <BlocoUsuario key={user.id} user={user} />
        )) : <></>}
      </ScrollView>
    </ThemedView>
  );
}

