import React, { useState } from 'react';
import { ScrollView, View, TextInput, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { ThemedView } from '@/components/ThemedView';
import { styles } from '@/constants/Styles';
import SidebarMenu from '@/components/SidebarMenu'; // Importando o menu
import BarraSuperior from '@/components/BarraSuperior';
import CaixaTextInput from '@/components/CaixaTextInput';
import BotaoVazado from '@/components/BotaoPersonalizado';

export default function EditarUsuarioScreen() {
  const [emailUsuario, setEmailUsuario] = useState('douglas@gmail.com');

  return (
    <ThemedView style={styles.container}>
      {/* Barra Superior, com botão de voltar */}
      <BarraSuperior titulo='EDITAR USUÁRIO' show="voltar"/>

      {/* Formulário */}
      <ThemedView style={[styles.roundBox, {flex:1}]}>
        <CaixaTextInput legenda='Usuário' onChange={setEmailUsuario} value={emailUsuario} tipo='email-address' />

        {/* Botão Salvar */}
        <BotaoVazado legenda='Salvar Usuário' type='subtitle' />
        {/* Botão Deletar */}
        <BotaoVazado legenda='Deletar Usuário' fundo cor={Colors.verdeClaro} type='subtitle' />
      </ThemedView>
    </ThemedView>
  );
}
