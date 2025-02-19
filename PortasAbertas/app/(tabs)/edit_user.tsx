import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';

export default function EditarUsuarioScreen() {
  const [emailUsuario, setEmailUsuario] = useState('douglas@gmail.com');

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior, com botão de voltar */}
      <BarraSuperior titulo='EDITAR USUÁRIO' show="voltar" destinoVoltar=''/>

      {/* Formulário */}
      <ThemedView style={[styles.roundBox, {flex:1}]}>
        {/* Caixa de input do usuário */}
        <CaixaTextInput legenda='Usuário' onChange={setEmailUsuario} value={emailUsuario} tipo='email-address' />
        {/* Botão Salvar */}
        <BotaoPersonalizado legenda='Salvar Usuário' type='subtitle' />
        {/* Botão Deletar */}
        <BotaoPersonalizado legenda='Deletar Usuário' fundo type='subtitle' />
      </ThemedView>
    </ThemedView>
  );
}
