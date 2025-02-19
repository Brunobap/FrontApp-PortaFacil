import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { View } from 'react-native';

export default function EditarUsuarioScreen() {
  const [emailUsuario, setEmailUsuario] = useState('douglas@gmail.com');

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior, com botão de voltar */}
      <BarraSuperior titulo='EDITAR USUÁRIO' show='voltar' destinoVoltar='' />

      {/* Formulário centralizado */}
      <ThemedView style={[styles.roundBox, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
        
        {/* Caixa de input do usuário */}
        <CaixaTextInput legenda='Usuário' onChange={setEmailUsuario} value={emailUsuario} tipo='email-address' />

        {/* Botão Salvar */}
        <View style={{ marginTop: 15, width: '100%'}}>
          <BotaoPersonalizado legenda='Salvar Usuário' type='subtitle' />
        </View>

        {/* Botão Deletar */}
        <View style={{ marginTop: 10, width: '100%'}}>
          <BotaoPersonalizado legenda='Deletar Usuário' fundo type='subtitle' />
        </View>

      </ThemedView>
    </ThemedView>
  );
}

