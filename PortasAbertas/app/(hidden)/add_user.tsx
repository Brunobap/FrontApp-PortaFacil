import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function AdicionarUsuarioScreen() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const AdicionarUser = () => {
    // Verificar as informações digitadas
    if (!nomeUsuario) {
      alert("Por favor, digite a informação pedida.")
      return
    }

    // Montar a requisição para o backend

    // Enviar a requisição pro backend

    // Se a resposta for positiva, voltar para a tela das portas
    alert("Usuário adicionado com sucesso! Voltando ao painel da porta.")
    router.navigate(`/adm_door?porta=${porta}`)
  }

  // Pegar o nome da porta pela propriedade do link
  const { porta } = useLocalSearchParams<{ porta: string; }>();

  return (
    <ThemedView style={styles.container}>
      <BarraSuperior titulo={`ADICIONAR USUÁRIO À '${porta}'`} show='voltar' destinoVoltar={`adm_door?porta=${porta}`}/>

      {/* Formulário */}
      <ThemedView style={[styles.roundBox, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
       <CaixaTextInput legenda='RA/CPF do usuário' onChange={setNomeUsuario} value={nomeUsuario} />

        {/* Botão Adicionar */}
        <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
        <BotaoPersonalizado onPress={AdicionarUser} legenda='Adicionar >' type='title' />
        </View>
      </ThemedView>
    </ThemedView>
  );
}




