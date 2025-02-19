import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';

export default function AdicionarUsuarioScreen() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <ThemedView style={styles.container}>
      <BarraSuperior titulo='Adicionar Usuário' show='voltar' />

      {/* Formulário */}
      <ThemedView style={[styles.roundBox, {alignItems: 'center'}]}>
        <CaixaTextInput legenda='Usuário' onChange={setNomeUsuario} value={nomeUsuario} />

        {/* Botão Adicionar */}
        <BotaoPersonalizado legenda='Adicionar >' type='title' />
      </ThemedView>
    </ThemedView>
  );
}
