import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { View } from 'react-native';

export default function AdicionarPortaScreen() {
  // Estados dos campos de inserção
  const [nomePorta, setNomePorta] = useState('');
  const [localPredio, setLocalPredio] = useState('');
  const [enderecoMac, setEnderecoMac] = useState('');

  
  function editarPessoa() {
    //verificar se os dados estão digitados corretamente 
  }

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior titulo="ADICIONAR PORTA" show="voltar" destinoVoltar="" />

      {/* Formulário centralizado */}
      <ThemedView
        style={[
          styles.roundBox,
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        {/* Campo Nome */}
        <CaixaTextInput
          legenda="Nome:"
          onChange={setNomePorta}
          value={nomePorta}
        />

        {/* Campo Local / Prédio */}
        <CaixaTextInput
          legenda="Local / Prédio:"
          onChange={setLocalPredio}
          value={localPredio}
        />

        {/* Campo Endereço MAC */}
        <CaixaTextInput
          legenda="Endereço MAC:"
          onChange={setEnderecoMac}
          value={enderecoMac}
        />

        {/* Botão Adicionar */}
        <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
          <BotaoPersonalizado onPress={() => editarPessoa} legenda="Adicionar  >" type="title" />
        </View>
      </ThemedView>
    </ThemedView>
  );
}
