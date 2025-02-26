import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function EditarUsuarioScreen() {
  // Pegar as propriedades do link
  const { porta, user } = useLocalSearchParams<{ porta: string; user: string }>();

  // Começar com o email passado no link
  const [emailUsuario, setEmailUsuario] = useState(user);
    
  // Funções dos botões de editar e remover
  const EditUser = () => {
    // Montar a requisição com o email antigo e o novo do usuário

    // Enviar a requisição para o backend

    // Voltar à página de adm_door daquela porta
    router.navigate(`/adm_door?porta=${porta}`)
  }
  const RemoveUser = () => {
    // Montar a requisição com o email antigo e o novo do usuário

    // Enviar a requisição para o backend

    // Voltar à página de adm_door daquela porta
    router.navigate(`/adm_door?porta=${porta}`)
  }

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior, com botão de voltar */}
      <BarraSuperior titulo='EDITAR USUÁRIO' show='voltar' />

      {/* Formulário centralizado */}
      <ThemedView style={[styles.roundBox, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        
        {/* Caixa de input do usuário */}
        <CaixaTextInput legenda='Usuário' onChange={setEmailUsuario} value={emailUsuario} tipo='email-address' />

        {/* Botão Salvar */}
        <View style={{ marginTop: 15, width: '100%'}}>
          <BotaoPersonalizado onPress={EditUser} legenda='Salvar Usuário' type='subtitle' />
        </View>

        {/* Botão Deletar */}
        <View style={{ marginTop: 10, width: '100%'}}>
          <BotaoPersonalizado onPress={RemoveUser} legenda='Remover Usuário' fundo type='subtitle' />
        </View>

      </ThemedView>
    </ThemedView>
  );
}

