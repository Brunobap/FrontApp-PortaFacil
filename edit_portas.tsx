import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoPersonalizado from '@/components/BotaoPersonalizado';
import { View } from 'react-native';

export default function EditarPortaScreen() {
  // Estados dos campos de edição
  const [nomePorta, setNomePorta] = useState('LATIN');
  const [localPredio, setLocalPredio] = useState('Biblioteca');
  const [enderecoMac, setEnderecoMac] = useState('65-a2-87-23-75-12');

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior */}
      <BarraSuperior titulo="EDITAR PORTA" show="voltar" destinoVoltar="" />
    
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
    
        {/* Botão Salvar */}
        {/* Ao clicar no botão Salvar, a aplicação deve enviar os dados atualizados do formulário (nome, local/prédio e endereço MAC) para a API.*/}
        <View style={{ marginTop: 20, width: '100%',}}>
          <BotaoPersonalizado legenda="Salvar" type="title" />
        </View>

        {/* Botão Deletar */}
         {/* Ao clicar no botão Deletar, a aplicação deve deletar os dados do formulário (nome, local/prédio e endereço MAC).*/}
        <View style={{ marginTop: 10, width: '100%',}}>
          <BotaoPersonalizado legenda="Deletar" fundo type="subtitle" />
        </View>
      </ThemedView>
    </ThemedView>
  );
}