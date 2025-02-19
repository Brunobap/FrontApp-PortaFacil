import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { View } from 'react-native';

export default function AdicionarUsuarioScreen() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (

    <ThemedView style={styles.container}>
      <BarraSuperior titulo='ADICIONAR USUÁRIO' show='voltar'  destinoVoltar=''/>

      {/* Formulário */}
      <ThemedView style={[styles.roundBox, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
       <CaixaTextInput legenda='Usuário' onChange={setNomeUsuario} value={nomeUsuario} />

        {/* Botão Adicionar */}
        <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
        <BotaoPersonalizado legenda='Adicionar >' type='title' />
        </View>
      </ThemedView>
    </ThemedView>
  );
}




